//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"",
    text: ""
  },
];

//Warning
const warnWarnings = [
  {
    icon: "warn_icon/r1.jpg",
    text: "大雨警報於本地時間06月14日23時00分發出。預料每小時雨量將會達到20毫米。市民應留在室內安全地方，注意天氣狀況。"
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = `雨區發展具有隨機性，市民仍然需要保持高度警惕，提防暴雨及其伴隨的猛烈陣風，甚至冰雹等強對流天氣發生的可能性。同時，低窪地區亦有可能出現水浸或積水；持續大雨亦有機會引致泥土鬆軟，有山泥傾瀉風險。市民外出時應注意天氣及路面狀況，避免在水浸地區進行活動及逗留在地下空間或無其他出口的空間，提防塌樹、山泥傾瀉等災害。`;

//Alert Tips
const alertipsText = `豪雨特別報告於本地時間06月13日04時20分發出。表示本澳在未來24小時累積雨量有機會達到100毫米以上。廣東沿岸未來數日間中出現短時強降雨，部份低窪地區可能出現水浸或積水；累積雨量高，持續大雨亦有機會引致泥土鬆軟，有山泥傾瀉風險，市民外出時應注意天氣及路面狀況。
`;

//Weather Forecast
const forecastRaw = `隨着西南季候風有所增強，同時切變線亦會南壓，廣東沿岸未來數日天氣持續不穩定，13日初時西南急流軸主要位於廣東西部一帶。隨著急流軸東移，13日稍後至14日初時驟雨逐漸增多。持續受西南急流影響，週末及下週初珠江口一帶雨勢間中較大。

06月15日（一）  25 - 31 °C   80 - 95 %
密雲，有大驟雨及狂風雷暴，雨勢較大及有豪雨。

06月16日（二）  25 - 31 °C   80 - 95 %
密雲，初時有大驟雨及狂風雷暴，初時雨勢較大及有豪雨。

更新時間：2026-06-14  23:00 MST
`;

// 氣溫
const chartRightDate = "2026-06-13 00:00 MST";

const label24hX = ["00H","01H","02H","03H","04H","05H","06H","07H","08H","09H","10H","11H",
                   "12H","13H","14H","15H","16H","17H","18H","19H","20H","21H","22H","23H"];
const temp24h = [30,30,30,30,30,29,30,30,31,31,32,32,33,33,32,31,29,28,28,28,27,27,27,27];

const label7dX = ["5","6","7","8","9","10","11"];
const temp7dMax = [33,30,28,28,29,30,31];
const temp7dMin = [27,25,25,25,25,26,26];

//Tropical Cyclone Track
const forecastInfo = {
  updated: "2026-06-19 08:00 MST"
};

const pastPoints = [
  {lat:12.2, lon:145.2, time: "06-19 02H", wind: 45},
  {lat:12.4, lon:144.3, time: "06-19 08H", wind: 50}
  
];

const forecastPoints = [
  {lat:12.4, lon:144.3, time: "06-19 08H", wind: 50,
    wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
  },
  {lat:12.7, lon:143.4, time: "06-19 20H", wind: 55},
  {lat:14.0, lon:148.4, time: "06-20 08H", wind: 65},
  {lat:15.3, lon:133.5, time: "06-21 08H", wind: 55},
  {lat:17.1, lon:128.9, time: "06-22 08H", wind: 55},
  {lat:18.6, lon:126.0, time: "06-23 08H", wind: 55},
  {lat:20.5, lon:125.3, time: "06-24 08H", wind: 55}
  
];

window.tcInfo = {
  name: "07W", 
  wind: forecastPoints[0].wind,
  pressure: 1004
};

//  { lat: 42.5, lon: 149.0, time: "06-09 14H", wind: '-' }, 



//{lat:19.5, lon:118.6, time: "06-04 17H", wind: 45,
  
    //wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    //wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
 // }，
