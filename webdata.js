//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"",
    text: "目前位於西北太平洋上的熱帶氣旋米克拉正在持續發展，未來一兩日會逐漸增強，大致移向菲律賓以東及台灣以東海域。"
  },
];

//Warning
const warnWarnings = [
  {
    icon: "warn_icon/h1.jpg",
    text: "酷熱警報於本地時間06月20日08時20分發出，預料本澳天氣酷熱。"
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = ``;

//Alert Tips
const alertipsText = `高溫預警提示於本地時間06月19日08時20分發出。表示澳門高溫天氣持續。極可能發生中暑、熱痙攣和熱衰竭。長時間暴露在陽光下或進行體力活動有可能發生嚴重中暑。建議市民避免戶外劇烈活動、穿著輕便及淺色的衣物、補充足夠水分，特別關注易受影響的族群。`;

//Weather Forecast
const forecastRaw = `副熱帶高壓脊仍然會在未來數日覆蓋華南沿岸，該區天氣穩定，日間天氣酷熱。

06月23日（二）  29 - 34 °C   60 - 80 %
大致天晴，日間天氣酷熱。

06月24日（三）  29 - 35 °C   60 - 80 %
大致天晴，日間天氣酷熱。

更新時間：2026-06-22 14:00 MST
`;

// 氣溫
const chartRightDate = "2026-06-22 14:00 MST";

const label24hX = ["00H","01H","02H","03H","04H","05H","06H","07H","08H","09H","10H","11H",
                   "12H","13H","14H","15H","16H","17H","18H","19H","20H","21H","22H","23H"];
const temp24h = [30,30,29,29,29,29,29,29,30,30,31,32,33,34,34,33,33,32,31,31,30,30,30,30];

const label7dX = ["23","24","25","26","27","28"];
const temp7dMax = [34,35,34,34,33,32,32];
const temp7dMin = [29,29,29,28,28,27,27];

//Tropical Cyclone Track
const forecastInfo = {
  updated: "2026-06-22 14:00 MST"
};

const pastPoints = [
  // Match STORM_DATA.past_track lats/lons sequence
  {lat:13.4, lon:141.9, time: "06-19 14H", wind: 45},
  {lat:14.0, lon:140.3, time: "06-19 20H", wind: 55},
  {lat:14.3, lon:138.7, time: "06-20 02H", wind: 65},
  {lat:14.3, lon:137.6, time: "06-20 08H", wind: 65},
  {lat:14.3, lon:136.7, time: "06-20 14H", wind: 75},
  {lat:14.5, lon:135.3, time: "06-20 20H", wind: 85},
  {lat:14.7, lon:134.0, time: "06-21 02H", wind: 90},
  {lat:15.2, lon:133.1, time: "06-21 08H", wind: 105},
  {lat:16.2, lon:131.8, time: "06-21 14H", wind: 110},
  {lat:16.7, lon:130.5, time: "06-21 20H", wind: 130},
  {lat:17.2, lon:129.1, time: "06-22 02H", wind: 145},
  {lat:17.4, lon:127.9, time: "06-22 08H", wind: 165},
  {lat:17.9, lon:126.9, time: "06-22 14H", wind: 195},
];

const forecastPoints = [
  // Forecast hour 0: base point (0h)
  {
    lat:17.9, lon:126.9, time: "06-22 14H", wind: 195,
    wind41: { ne: 230, nw: 230, sw: 150, se: 180 }, 
    wind88: { ne: 100, nw: 100, sw: 60, se: 80 } 
  },
  {lat:18.7, lon:125.8, time: "06-23 02H", wind: 205},
  {lat:19.3, lon:125.1, time: "06-24 14H", wind: 210},
  {lat:21.2, lon:124.8, time: "06-25 14H", wind: 185},
  {lat:23.8, lon:125.9, time: "06-26 14H", wind: 155},
  {lat:27.5, lon:129.2, time: "06-27 14H", wind: 130},
  {lat:33.2, lon:137.4, time: "06-28 14H", wind: 110},
];

window.tcInfo = {
  name: "米克拉", 
  wind: forecastPoints[0].wind,
  pressure: 935
};

//  { lat: 42.5, lon: 149.0, time: "06-09 14H", wind: '-' }, 



//{lat:19.5, lon:118.6, time: "06-04 17H", wind: 45,
  
    //wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    //wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
 // }，
