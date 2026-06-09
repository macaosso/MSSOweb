//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"warn_icon/r1.jpg",
    text: "受冷空氣影響，今明兩日鋒面雨帶被推至南海"
  },
];

//Warning
const warnWarnings = [
  {
    icon: "warn_icon/r1.jpg",
    text: "受冷空氣影響，今明兩日鋒面雨帶被推至南海"
  },
  {
    icon: "warn_icon/r1.jpg",
    text: "受冷空氣影響，今明兩日鋒面雨帶被推至南海"
  }
];

//Special Warning Tips
const swtText = `今明兩日鋒面雨帶被推至南海，本澳雨勢減弱。`;

//Alert Tips
const alertipsText = `今明兩日鋒面雨帶被推至南海，本澳雨勢減弱。 `;

//Weather Forecast
const forecastRaw = `受冷空氣影響，今明兩日鋒面雨帶被推至南海，本澳雨勢減弱。週五至下週初期間冷空氣減弱，西南氣流重新主導，鋒面雨帶推至珠江口沿岸，同時高空不穩定，該區雨勢重新增強，雨勢頗大及有狂風雷暴。

06月09日（二）  24 - 30 °C   70 - 90 %
多雲，短暫時間有陽光。

06月10日（三）  25 - 31 °C   65 - 85 %
多雲，短暫時間有陽光。

更新時間：2026-06-09  14:00 MST
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
