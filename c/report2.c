#include <assert.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define INF 1000000
#define STATION_LEN 102

typedef struct {
    int prev; // このノードの1つ前のノード（経路）
    int min_weight; // このノードの累計最短距離
    bool visited; // このノードは訪問済みかどうか
} node;

typedef struct {
    int size; // グラフ全体のノードの数
    int mat[STATION_LEN][STATION_LEN]; // グラフ中のそれぞれの辺の重みを格納する配列
} adj_mat;

struct station {
    int station_index;
    char station_name[80];
}station_list[STATION_LEN];

adj_mat graph;
node nodes[STATION_LEN];

int dijkstra(int start, int goal) {
    nodes[start].min_weight = 0; // スタートノードの累計最短距離を0にする
    while (true) {
        // 未訪問で最小重みの点を決定
        int min_weight = INF; // そのノードからの最短距離
        int target; // 対象のノードから最短となるノードのインデックス
        for (int i = 1; i < graph.size; ++i) { // グラフ内の全てのノードに対して処理
            if (!nodes[i].visited && nodes[i].min_weight < min_weight) { // ノードが未訪問で最短距離ならtargetとmin_weightを更新
                target = i; // 対象のノードから最短となるノードのインデックスを格納
                min_weight = nodes[i].min_weight; // 今回対象のノードから他のノードへの最短距離を更新
                // node[i].min_weightの値は、while分の1番下で定められている
                // min_weightは今回対象のノードから他のノードへの最短距離、nodes[i].min_weightは今回対象のノードまでの累積最短距離
            }
        }
        assert(min_weight != INF);  // グラフが連結ではない（エラーなのでプログラム終了）

        // ゴールに到達したら終了
        if (target == goal) {
            return nodes[goal].min_weight; // ゴールノードの累計最短距離を返す
        }

        // ターゲットを訪問し、そこから進める点の重みを更新
        nodes[target].visited = true; // 訪問済みにする
        for (int neighbor = 1; neighbor < graph.size; ++neighbor) {
            int total_weight = nodes[target].min_weight + graph.mat[target][neighbor]; // 累計距離に、targetからneighborの重みを追加
            if (total_weight < nodes[neighbor].min_weight) { // total_weightが累計最短距離より短くなるなら
                nodes[neighbor].min_weight = total_weight; // 累計最短距離を更新
                nodes[neighbor].prev = target; // 1つ前の経路がどこかを保持
            }
        }
    }
}

int get_station_index(char *name) {
    for (int i = 1; i < STATION_LEN; i++) {
        if (strcmp(name, station_list[i].station_name) == 0) {
            return i;
        }
    }
    return 0;
}

int main(void) {
    // グラフとノードを初期化
    for (int i = 0; i < STATION_LEN; ++i) {
        nodes[i].min_weight = INF; // ノードまでの累計最短距離を無限大に
        nodes[i].visited = false; // 未訪問に
        nodes[i].prev = -1; // 前のノードはまだ決定していない
        for (int j = 0; j < STATION_LEN; ++j) {
            graph.mat[i][j] = INF;  // 辺の重みを無限大に
        }
    }

    graph.size = STATION_LEN;
    FILE *fp1, *fp2;
    int start_station, goal_station, time, i, j;
    char line[80], *divided, start_name[80], goal_name[80];

    // ファイルオープン
    if ((fp1 = fopen("stations.txt", "r")) == NULL) {
        exit(1);
    }
    if ((fp2 = fopen("adjlist.txt", "r")) == NULL) {
        exit(1);
    }

    // ファイルの中身の読み込み
    for (i = 1; fscanf(fp1, "%d %s", &(station_list[i].station_index), station_list[i].station_name) != EOF; i++) {
    }
    while (fgets(line, 100, fp2) != NULL) {
        divided = strtok(line, " ");
        if (sscanf(divided, "%d", &start_station) != 1) {
            continue;
        }
        while (divided != NULL) {
            divided = strtok(NULL, " ");
            if (divided == NULL) {
                break;
            }
            if (sscanf(divided, "%d,%d", &goal_station, &time) != 2) {
                continue;
            }
            graph.mat[start_station][goal_station] = time;
        }
    }

    // ファイルクローズ
    fclose(fp1);
    fclose(fp2);

    // 駅名を入力し、最短経路の時間を出力
    while (1) {
        printf("出発駅: ");
        scanf("%s", start_name);
        start_station = get_station_index(start_name);
        if (start_station == 0)  {
            printf("入力に誤りがあります\n");
        } else {
            break;
        }
    }
    while (1)
    {
        printf("到着駅: ");
        scanf("%s", goal_name);
        goal_station = get_station_index(goal_name);
        if (goal_station == 0)  {
            printf("入力に誤りがあります\n");
        } else {
            break;
        }
    }
    if (start_station == goal_station) {
        printf("出発と到着に同じ駅を指定できません\n");
        return 0;
    }
    printf("所要時間: %d分\n", dijkstra(start_station, goal_station));

    // ゴールからスタートまでのルートを出力
    int route_node = goal_station;
    printf("経路: %s", station_list[route_node].station_name);
    while (true) {
        route_node = nodes[route_node].prev;
        printf(" <- %s", station_list[route_node].station_name);
        if (route_node == start_station)
            break;
    }
    printf("\n");
    return 0;
}
