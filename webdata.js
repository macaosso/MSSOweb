//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"",
    text: "位於西北太平洋上的熱帶氣旋正在發展。早上 8 時，熱帶低氣壓 07W 集結在本澳東南偏東約3430公里，即北緯12.4度，東經144.3度，其中心附近最高持續風速約為每小時 50 公里，向西北移動，時速24公里，未來數日會逐漸增強。"
  },
];

//Warning
const warnWarnings = [
  {
    icon: "",
    text: ""
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = `1. 豪雨特別報告於本地時間06月19日10時20分取消。
本澳過去數日曾多次受強雷雨區影響，共發出7次大雨警報及1次暴雨警報。
本次豪雨特別報告生效時間為150小時，是設立以來的最長紀錄。在豪雨特別報告生效期間，本澳錄得超過250毫米雨量。
曾錄得的最高過去24小時雨量：
澳門：113.0 mm (DP 18日11:50)🟠
氹仔：127.2 mm (JA 18日 11:20)🟠
路環：109.4 mm (DC 18日 10:50) 🟠
預計本澳雨勢漸趨緩和。

2. 長時間暴露在陽光下或進行體力活動可能導致中暑、肌肉抽筋和熱衰竭。建議市民減少劇烈戶外活動、穿著輕便及淺色的衣物、補充足夠水分。`;

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
  updated: "2026-06-19 08:00 MST"
};

const pastPoints = [
  {lat:12.2, lon:145.2, time: "06-19 02H", wind: 45},
  {lat:12.4, lon:144.3, time: "06-19 08H", wind: 50}
  
];

const forecastPoints = [
  {lat:12.4, lon:144.3, time: "06-20 02H", wind: 65,
    wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
  },
  {lat:13.2, lon:141.4, time: "06-19 20H", wind: 75},
  {lat:14.0, lon:138.4, time: "06-20 08H", wind: 85},
  {lat:15.3, lon:133.5, time: "06-21 08H", wind: 90},
  {lat:17.1, lon:128.9, time: "06-22 08H", wind: 90},
  {lat:18.6, lon:126.0, time: "06-23 08H", wind: 90},
  {lat:20.5, lon:125.3, time: "06-24 08H", wind: 85}
  
];

window.tcInfo = {
  name: "米克拉", 
  wind: forecastPoints[0].wind,
  pressure: 996
};

//  { lat: 42.5, lon: 149.0, time: "06-09 14H", wind: '-' }, 



//{lat:19.5, lon:118.6, time: "06-04 17H", wind: 45,
  
    //wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    //wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
 // }，
