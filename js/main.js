const inf = 1000000;
const station_len = 102;
const time_array = Array.from(new Array(102), () => new Array(102).fill(inf));
const station_list = ["", "渋谷", "代官山", "中目黒", "祐天寺", "学芸大学", "都立大学", "自由が丘", "田園調布", "多摩川", "新丸子", "武蔵小杉", "元住吉", "日吉", "綱島", "大倉山", "菊名", "妙蓮寺", "白楽", "東白楽", "反町", "横浜", "新高島", "みなとみらい", "馬車道", "日本大通り", "元町・中華街", "目黒", "不動前", "武蔵小山", "西小山", "洗足", "大岡山", "奥沢", "池尻大橋", "三軒茶屋", "駒澤大学", "桜新町", "用賀", "二子玉川", "二子新地", "高津", "溝の口", "梶が谷", "宮崎台", "宮前平", "鷺沼", "たまプラーザ", "あざみ野", "江田", "市が尾", "藤が丘", "青葉台", "田奈", "長津田", "つくし野", "すずかけ台", "南町田グランベリーパーク", "つきみ野", "中央林間", "大井町", "下神明", "戸越公園", "中延", "荏原町", "旗の台", "北千束", "緑が丘", "九品仏", "尾山台", "等々力", "上野毛", "五反田", "大崎広小路", "戸越銀座", "荏原中延", "長原", "洗足池", "石川台", "雪が谷大塚", "御嶽山", "久が原", "千鳥町", "池上", "蓮沼", "蒲田", "沼部", "鵜の木", "下丸子", "武蔵新田", "矢口渡", "西太子堂", "若林", "松陰神社前", "世田谷", "上町", "宮の坂", "山下", "松原", "下高井戸", "恩田", "こどもの国"]
time_array[1][2] = 2;
time_array[1][34] = 3;
time_array[2][1] = 2;
time_array[2][3] = 1;
time_array[3][2] = 1;
time_array[3][4] = 2;
time_array[4][3] = 2;
time_array[4][5] = 2;
time_array[5][4] = 2;
time_array[5][6] = 3;
time_array[6][5] = 3;
time_array[6][7] = 1;
time_array[7][6] = 1;
time_array[7][8] = 4;
time_array[7][67] = 2;
time_array[7][68] = 2;
time_array[8][7] = 4;
time_array[8][9] = 1;
time_array[8][33] = 2;
time_array[9][8] = 1;
time_array[9][10] = 2;
time_array[9][86] = 2;
time_array[10][9] = 2;
time_array[10][11] = 1;
time_array[11][10] = 1;
time_array[11][12] = 3;
time_array[12][11] = 3;
time_array[12][13] = 1;
time_array[13][12] = 1;
time_array[13][14] = 3;
time_array[14][13] = 3;
time_array[14][15] = 2;
time_array[15][14] = 2;
time_array[15][16] = 2;
time_array[16][15] = 2;
time_array[16][17] = 3;
time_array[17][16] = 3;
time_array[17][18] = 2;
time_array[18][17] = 2;
time_array[18][19] = 2;
time_array[19][18] = 2;
time_array[19][20] = 2;
time_array[20][19] = 2;
time_array[20][21] = 2;
time_array[21][20] = 2;
time_array[21][22] = 2;
time_array[22][21] = 2;
time_array[22][23] = 1;
time_array[23][22] = 1;
time_array[23][24] = 2;
time_array[24][23] = 2;
time_array[24][25] = 2;
time_array[25][24] = 2;
time_array[25][26] = 2;
time_array[26][25] = 2;
time_array[27][28] = 1;
time_array[28][27] = 1;
time_array[28][29] = 2;
time_array[29][28] = 2;
time_array[29][30] = 1;
time_array[30][29] = 1;
time_array[30][31] = 2;
time_array[31][30] = 2;
time_array[31][32] = 2;
time_array[32][31] = 2;
time_array[32][33] = 3;
time_array[32][66] = 2;
time_array[32][67] = 1;
time_array[33][8] = 2;
time_array[33][32] = 3;
time_array[34][1] = 3;
time_array[34][35] = 1;
time_array[35][34] = 1;
time_array[35][36] = 4;
time_array[35][91] = 1;
time_array[36][35] = 4;
time_array[36][37] = 2;
time_array[37][36] = 2;
time_array[37][38] = 3;
time_array[38][37] = 3;
time_array[38][39] = 3;
time_array[39][38] = 3;
time_array[39][40] = 2;
time_array[39][71] = 3;
time_array[40][39] = 2;
time_array[40][41] = 1;
time_array[41][40] = 1;
time_array[41][42] = 1;
time_array[42][41] = 1;
time_array[42][43] = 2;
time_array[43][42] = 2;
time_array[43][44] = 2;
time_array[44][43] = 2;
time_array[44][45] = 2;
time_array[45][44] = 2;
time_array[45][46] = 1;
time_array[46][45] = 1;
time_array[46][47] = 2;
time_array[47][46] = 2;
time_array[47][48] = 2;
time_array[48][47] = 2;
time_array[48][49] = 2;
time_array[49][48] = 2;
time_array[49][50] = 2;
time_array[50][49] = 2;
time_array[50][51] = 2;
time_array[51][50] = 2;
time_array[51][52] = 1;
time_array[52][51] = 1;
time_array[52][53] = 3;
time_array[53][52] = 3;
time_array[53][54] = 2;
time_array[54][53] = 2;
time_array[54][55] = 2;
time_array[54][100] = 3;
time_array[55][54] = 2;
time_array[55][56] = 2;
time_array[56][55] = 2;
time_array[56][57] = 1;
time_array[57][56] = 1;
time_array[57][58] = 2;
time_array[58][57] = 2;
time_array[58][59] = 3;
time_array[59][58] = 3;
time_array[60][61] = 1;
time_array[61][60] = 1;
time_array[61][62] = 2;
time_array[62][61] = 1;
time_array[62][63] = 1;
time_array[63][62] = 1;
time_array[63][64] = 1;
time_array[64][63] = 1;
time_array[64][65] = 1;
time_array[65][64] = 1;
time_array[65][66] = 2;
time_array[65][75] = 1;
time_array[65][76] = 2;
time_array[66][32] = 2;
time_array[66][65] = 2;
time_array[67][7] = 2;
time_array[67][32] = 1;
time_array[68][7] = 2;
time_array[68][69] = 2;
time_array[69][68] = 2;
time_array[69][70] = 1;
time_array[70][69] = 1;
time_array[70][71] = 1;
time_array[71][39] = 3;
time_array[71][70] = 1;
time_array[72][73] = 1;
time_array[73][72] = 1;
time_array[73][74] = 2;
time_array[74][73] = 2;
time_array[74][75] = 2;
time_array[75][65] = 1;
time_array[75][74] = 2;
time_array[76][65] = 2;
time_array[76][77] = 2;
time_array[77][76] = 2;
time_array[77][78] = 1;
time_array[78][77] = 1;
time_array[78][79] = 1;
time_array[79][78] = 1;
time_array[79][80] = 2;
time_array[80][79] = 2;
time_array[80][81] = 2;
time_array[81][80] = 2;
time_array[81][82] = 1;
time_array[82][81] = 1;
time_array[82][83] = 2;
time_array[83][82] = 2;
time_array[83][84] = 2;
time_array[84][83] = 2;
time_array[84][85] = 2;
time_array[85][84] = 2;
time_array[85][90] = 3;
time_array[86][9] = 2;
time_array[86][87] = 2;
time_array[87][86] = 2;
time_array[87][88] = 1;
time_array[88][87] = 1;
time_array[88][89] = 1;
time_array[89][88] = 1;
time_array[89][90] = 2;
time_array[90][89] = 2;
time_array[90][85] = 3;
time_array[91][35] = 1;
time_array[91][92] = 2;
time_array[92][91] = 2;
time_array[92][93] = 2;
time_array[93][92] = 2;
time_array[93][94] = 1;
time_array[94][93] = 1;
time_array[94][95] = 1;
time_array[95][94] = 1;
time_array[95][96] = 3;
time_array[96][95] = 3;
time_array[96][97] = 2;
time_array[97][96] = 2;
time_array[97][98] = 2;
time_array[98][97] = 2;
time_array[98][99] = 3;
time_array[99][98] = 3;
time_array[100][54] = 3;
time_array[100][101] = 1;
time_array[101][100] = 1;

var nodes = [{prev: 0, min_weight: 0, visited: false}];
for (var i = 1; i < station_len; ++i) {
  nodes.push({prev: -1, min_weight: inf, visited: false});
}

function dijkstra(start, goal) {
  nodes[start].min_weight = 0;
  while(true) {
    var min_weight  = inf;
    var target = 0;
    for (i = 1; i < station_len; ++i) {
      if (!nodes[i].visited && nodes[i].min_weight < min_weight) {
        target = i;
        min_weight = nodes[i].min_weight;
      }
    }
    if (target == goal) {
      return nodes[goal].min_weight;
    }
    nodes[target].visited = true;
    for (var neighbor = 1; neighbor < station_len; ++neighbor) {
      var total_weight = nodes[target].min_weight + time_array[target][neighbor];
      if (total_weight < nodes[neighbor].min_weight) {
        nodes[neighbor].min_weight = total_weight;
        nodes[neighbor].prev = target;
      }
    }
  }
}

$(document).ready(function(){
  $(".start-train-line").change(function(){
    var line_name = $(this).val();
    $('.start-selected-line').removeClass('start-selected-line');
    if (line_name == "東横線") {
      $('#start-toyoko').addClass('start-selected-line');
    } else if (line_name == "目黒線") {
      $('#start-meguro').addClass('start-selected-line');
    } else if (line_name == "田園都市線") {
      $('#start-denentoshi').addClass('start-selected-line');
    } else if (line_name == "大井町線") {
      $('#start-ooimachi').addClass('start-selected-line');
    } else if (line_name == "池上線") {
      $('#start-ikegami').addClass('start-selected-line');
    } else if (line_name == "東急多摩川線") {
      $('#start-tamagawa').addClass('start-selected-line');
    } else if (line_name == "世田谷線") {
      $('#start-setagaya').addClass('start-selected-line');
    } else if (line_name == "こどもの国線") {
      $('#start-kodomonokuni').addClass('start-selected-line');
    } else if (line_name == "みなとみらい線") {
      $('#start-minatomirai').addClass('start-selected-line');
    }
  });
  $(".goal-train-line").change(function(){
    var line_name = $(this).val();
    $('.goal-selected-line').removeClass('goal-selected-line');
    if (line_name == "東横線") {
      $('#goal-toyoko').addClass('stgoalart-selected-line');
    } else if (line_name == "目黒線") {
      $('#goal-meguro').addClass('goal-selected-line');
    } else if (line_name == "田園都市線") {
      $('#goal-denentoshi').addClass('goal-selected-line');
    } else if (line_name == "大井町線") {
      $('#goal-ooimachi').addClass('goal-selected-line');
    } else if (line_name == "池上線") {
      $('#goal-ikegami').addClass('goal-selected-line');
    } else if (line_name == "東急多摩川線") {
      $('#goal-tamagawa').addClass('goal-selected-line');
    } else if (line_name == "世田谷線") {
      $('#goal-setagaya').addClass('goal-selected-line');
    } else if (line_name == "こどもの国線") {
      $('#goal-kodomonokuni').addClass('goal-selected-line');
    } else if (line_name == "みなとみらい線") {
      $('#goal-minatomirai').addClass('goal-selected-line');
    }
  });
});

$('.search').on('click', function() {
  var start_name = $('.start-selected-line').val();
  var goal_name = $('.goal-selected-line').val();
  if (start_name == goal_name) {
    $('.total-time').text("");
    $('.route').text("出発と到着を同じ駅に指定できません");
    return;
  }
  var start_index = station_list.indexOf(start_name);
  var goal_index = station_list.indexOf(goal_name);
  $('.hide-h4').removeClass('hide-h4');
  $('.total-time').text(dijkstra(start_index, goal_index) + "分");
  var route_node = goal_index;
  var route_array = [station_list[route_node]];
  while (true) {
    route_node = nodes[route_node].prev;
    route_array.push(station_list[route_node]);
    if (route_node == start_index) {
      break;
    }
  }
  var route = ""
  for (i = route_array.length - 1; i >= 0; i--) {
    route += route_array[i];
    route += "→"
  }
  $('.route').text(route.slice(0, -1));
});