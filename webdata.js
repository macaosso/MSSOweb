//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"",
    text: ""
  },
  
  {
    icon:"",
    text: ""
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
const swtText = `一個低壓區正位於南海北部，受惠於西南季候風及副熱帶高壓脊相關的東南風匯聚，該低壓區將有機會進一步發展，並靠近珠江口一帶，但由於低壓區在南海上發展時間較短，會否增強為熱帶低氣壓仍存在一定變數。

若該低壓區將有機會進一步發展為熱帶氣旋，珠江口一帶風勢會有所增強，本地風力明日會逐漸增強，屆時本台將視乎情況在今日晚間至明日考慮發出戒備警報或直接發出強風警報。

不過，無論其會否發展為熱帶氣旋，與其相關的大雨及狂風雷暴將於明日影響珠江口一帶，今明兩日累積雨量較多，不排除會間中出現短時強降雨，屆時低窪地區不排除有水浸風險。因此，市民應完成適當的預防措施，留意最新天氣訊息。

市民應特別留意未來數日天氣資訊，做好防風及防水浸措施。`;

//Alert Tips
const alertipsText = `高溫預警提示於本地時間06月29日12時20分發出。`;

//Weather Forecast
const forecastRaw = `副熱帶高壓脊仍然會在未來一兩日覆蓋華南沿岸，該區天氣穩定，日間天氣酷熱。隨着副熱帶高壓脊會有所減弱，受低層偏南風加強影響，廣東沿海驟雨增多及有雷暴，「米克拉」在下週初逐漸移向日本一帶，屆時副熱帶高壓脊會重新增強，本澳天氣轉趨穩定，日間天氣酷熱。

06月23日（二）  29 - 34 °C   60 - 80 %
大致天晴，日間天氣酷熱。

06月24日（三）  29 - 35 °C   60 - 80 %
大致天晴，日間天氣酷熱。

更新時間：2026-06-22 14:00 MST
`;

// 氣溫
const chartRightDate = "2026-06-24 14:00 MST";

const label24hX = ["00H","04H","08H",
                   "12H","16H","23H"];
const temp24h = [30,29,32,34,33,31];

const label7dX = ["23","24","25","26","27","28"];
const temp7dMax = [34,35,34,34,33,32,32];
const temp7dMin = [29,29,29,28,28,27,27];

//Tropical Cyclone Track
const forecastInfo = {
  updated: "2026-07-01 16:00 MST"
};

const pastPoints = [
  // Match STORM_DATA.past_track lats/lons sequence
  {lat:13.8, lon:120.1, time: "06-30 20H", wind: 45},
  {lat:14.1, lon:119.3, time: "07-01 02H", wind: 45},
  {lat:14.9, lon:118.4, time: "07-01 08H", wind: 50},
  {lat:15.8, lon:117.7, time: "07-01 14H", wind: 55},
  {lat:16.2, lon:117.4, time: "07-01 16H", wind: 55},
  
  
];

const forecastPoints = [
  // Forecast hour 0: base point (0h)
  {
    lat:16.2, lon:117.4, time: "07-01 16H", wind: 55,
    wind41: { ne: 0, nw: 0, sw: 0, se: 0 }, 
    wind88: { ne: 0, nw: 0, sw: 0, se: 0 } 
  },
  {lat:17.0, lon:114.7, time: "07-02 04H", wind: 65},
  {lat:17.2, lon:112.7, time: "07-02 16H", wind: 75},
  {lat:18.3, lon:110.7, time: "07-03 16H", wind: 90},
  {lat:21.0, lon:109.1, time: "07-04 16H", wind: 90},
  {lat:24.0, lon:109.5, time: "07-05 16H", wind: 55},
  {lat:24.6, lon:110.0, time: "07-06 16H", wind: 40},
];

window.tcInfo = {
  name: "96W", 
  wind: forecastPoints[0].wind,
  pressure: 1000
};

//  { lat: 42.5, lon: 149.0, time: "06-09 14H", wind: '-' }, 



//{lat:19.5, lon:118.6, time: "06-04 17H", wind: 45,
  
    //wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    //wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
 // }，
