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
    text: "酷熱警報於本地時間06月20日08時20分發出，預料本澳今日天氣酷熱，最高氣溫約33-34度。"
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = `長時間暴露在陽光下或進行體力活動可能導致中暑、肌肉抽筋和熱衰竭。建議市民減少劇烈戶外活動、穿著輕便及淺色的衣物、補充足夠水分。`;

//Alert Tips
const alertipsText = `高溫預警提示於本地時間06月19日08時20分發出。表示澳門高溫天氣持續。預計本澳未來數日日間天氣相當炎熱，最高氣溫將達到32度以上。`;

//Weather Forecast
const forecastRaw = `隨著副熱帶高壓脊西伸，主要雨區會逐漸北抬。但受偏南氣流影響，今早仍有一兩陣驟雨，日間有陽光，天氣炎熱。副熱帶高壓脊將會覆蓋華南沿岸，本澳未來數日氣温上升，天色明朗，日間天氣酷熱。

06月20日（六）  28 - 32 °C   60 - 85 %
初時有幾陣驟雨，日間部份時間有陽光，天氣炎熱。

06月21日（日）  29 - 33 °C   60 - 80 %
初時有一兩陣驟雨，日間有陽光及天氣酷熱。

更新時間：2026-06-20  03:00 MST
`;

// 氣溫
const chartRightDate = "2026-06-13 00:00 MST";

const label24hX = ["00H","01H","02H","03H","04H","05H","06H","07H","08H","09H","10H","11H",
                   "12H","13H","14H","15H","16H","17H","18H","19H","20H","21H","22H","23H"];
const temp24h = [29,29,29,29,29,29,28,28,29,29,30,31,31,32,32,31,31,31,30,30,30,30,29,29];

const label7dX = ["20","21","22","23","24","25","26"];
const temp7dMax = [32,33,33,34,34,34,34];
const temp7dMin = [28,29,29,29,29,29,29];

//Tropical Cyclone Track
const forecastInfo = {
  updated: "2026-06-20 14:00 MST"
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
  {lat:16.7, lon:130.5, time: "06-22 20H", wind: 130},
  {lat:17.1, lon:129.0, time: "06-22 02H", wind: 145}
];

const forecastPoints = [
  // Forecast hour 0: base point (0h)
  {
    lat:17.1, lon:129.0, time: "06-22 02H", wind: 145,
    wind41: { ne: 200, se: 170, sw: 140, nw: 200 }, 
    wind88: { ne: 80, se: 60, sw: 50, nw: 70 } 
  },
  {lat:17.7, lon:128.1, time: "06-22 14H", wind: 165},
  {lat:18.4, lon:126.3, time: "06-23 02H", wind: 175},
  {lat:19.7, lon:124.7, time: "06-24 02H", wind: 165},
  {lat:21.8, lon:124.7, time: "06-25 02H", wind: 140},
  {lat:24.0, lon:125.5, time: "06-26 02H", wind: 110},
  {lat:27.0, lon:127.6, time: "06-27 02H", wind: 85}
];

window.tcInfo = {
  name: "米克拉", 
  wind: forecastPoints[0].wind,
  pressure: 965
};

//  { lat: 42.5, lon: 149.0, time: "06-09 14H", wind: '-' }, 



//{lat:19.5, lon:118.6, time: "06-04 17H", wind: 45,
  
    //wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    //wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
 // }，
