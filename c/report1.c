#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <wchar.h>
#include <locale.h>

#define STATION_LEN 102

struct station {
    int station_index;
    wchar_t station_name[80];
};

int main()
{
    setlocale(LC_ALL, "ja_JP.UTF-8");
    FILE *fp1, *fp2;
    struct station station_list[STATION_LEN];
    int time_array[STATION_LEN][STATION_LEN];
    int start_station, end_station, time, i, j;
    char line[80], *divided;

    // 行列の初期化（全ての要素を0に）
    for (i = 0; i < STATION_LEN; i++) {
        for (j = 0; j < STATION_LEN; j++) {
            time_array[i][j] = 0;
        }
    }

    // ファイルオープン
    if ((fp1 = fopen("stations.txt", "r")) == NULL) {
        exit(1);
    }
    if ((fp2 = fopen("adjlist.txt", "r")) == NULL) {
        exit(1);
    }

    // ファイルの中身の読み込み
    for (i = 1; fscanf(fp1, "%d %ls", &(station_list[i].station_index), station_list[i].station_name) != EOF; i++) {
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
            if (sscanf(divided, "%d,%d", &end_station, &time) != 2) {
                continue;
            }
            time_array[start_station][end_station] = time;
        }
    }
    for (i = 0; i < STATION_LEN; i++) {
        for (j = 0; j < STATION_LEN; j++) {
            if (time_array[i][j] == 0) {
                continue;
            }
            wprintf(L"%-20ls| %-20ls| %d\n", station_list[i].station_name, station_list[j].station_name, time_array[i][j]);
        }
    }
    // ファイルクローズ
    fclose(fp1);
    fclose(fp2);
    return 0;
}