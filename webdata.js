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
    icon: "warn_icon/h1.jpg",
    text: "酷熱警報於本地時間06月05日16時20分發出，取代非常酷熱警報。預料本澳明日部分地區天氣酷熱，最高氣溫約33度。"
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = ``;

//Alert Tips
const alertipsText = `高溫預警提示於本地時間05月23日19時20分發出。表示澳門高溫天氣持續。（2026-06-04 14:20 MST 更新)`;

//Weather Forecast
const forecastRaw = `隨着西南氣流逐漸加強，週末期間間中有驟雨及雷暴。一股弱冷空氣將會在下週初影響本澳，與西南季候風匯聚形成輻合帶，珠江口一帶下週初至中期雨勢加強，有頻密狂風大驟雨及猛烈雷暴，週二天氣較為不穩定，雨勢頗大，可能有豪雨。週三至週四受冷空氣影響，鋒面雨帶被推至南海，週五至下週末期間冷空氣減弱，西南氣流重新主導，鋒面雨帶推至珠江口沿岸，該區雨勢重新增強，雨勢頗大及有狂風雷暴。

06月06日（六）  28 - 33 °C   65 - 85 %
日間部份時間有陽光，天氣酷熱，有幾陣驟雨及雷暴。

06月07日（日）  27 - 31 °C   65 - 92 %
多雲，間中有驟雨及幾陣雷暴，雨勢間中較頻密。

更新時間：2026-06-06  02:00 MST
`;

// 氣溫
const chartRightDate = "2026-06-06 00:00 MST";

const label24hX = ["00H","01H","02H","03H","04H","05H","06H","07H","08H","09H","10H","11H",
                   "12H","13H","14H","15H","16H","17H","18H","19H","20H","21H","22H","23H"];
const temp24h = [30,30,30,30,30,29,30,30,31,31,32,32,33,33,32,31,29,28,28,28,27,27,27,27];

const label7dX = ["5","6","7","8","9","10","11"];
const temp7dMax = [33,30,28,28,29,30,31];
const temp7dMin = [27,25,25,25,25,26,26];

//Tropical Cyclone Track
const forecastInfo = {
  updated: "/"
};

const pastPoints = [
];

const forecastPoints = [
  {lat:19.5, lon:118.6, time: "06-04 17H", wind: 45,
    wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
  }
];

window.tcInfo = {
  name: "/", 
  wind: forecastPoints[0].wind,
  pressure: 1000
};

//  { lat: 42.5, lon: 149.0, time: "06-09 14H", wind: '-' }, 



//{lat:19.5, lon:118.6, time: "06-04 17H", wind: 45,
  
    //wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    //wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
 // }，
