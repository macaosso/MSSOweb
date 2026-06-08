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
    icon: "",
    text: " 豪雨特別報告於本地時間06月07日13時40分發出。表示本澳在未來24小時累積雨量有機會達到100毫米以上；或在過去24小時累積雨量已經/將有機會達到100毫米以上，且雨勢將會持續。"
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = `廣東沿岸未來數日間中出現短時強降雨，部份低窪地區可能出現水浸或積水；累積雨量高，持續大雨亦有機會引致泥土鬆軟，有山泥傾瀉風險，市民外出時應注意天氣及路面狀況。市民應完成適當的預防措施，避免在水浸地區進行活動及逗留在地下空間或無其他出口的空間；留意道路交通資訊，提防塌樹、山泥傾瀉等災害。`;

//Alert Tips
const alertipsText = ` 06月07日17時的過去24小時雨量：
澳門：101.0 mm 
氹仔：9.6 mm
路環：11.6 mm`;

//Weather Forecast
const forecastRaw = `受低壓槽及西南氣流共同影響，南海北部今日有大驟雨及雷暴，本澳間中有驟雨及雨勢較為頻密。週三至週四受冷空氣影響，鋒面雨帶被推至南海，本澳雨勢減弱。週五至下週初期間冷空氣減弱，西南氣流重新主導，鋒面雨帶推至珠江口沿岸，該區雨勢重新增強，雨勢頗大及有狂風雷暴。

06月06日（六）  26 - 32 °C   65 - 88 %
初時部份時間有陽光及天氣炎熱，漸轉多雲，稍後有幾陣驟雨及雷暴，雨勢間中較頻密。

06月07日（日）  27 - 31 °C   65 - 92 %
多雲，間中有驟雨及幾陣雷暴，雨勢間中較頻密。

更新時間：2026-06-06  12:00 MST
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
