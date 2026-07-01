//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"",
    text: "位於菲律賓附近的低壓區已發展為一熱帶低氣壓。下午2時，熱帶低氣壓集結在本澳東南約偏南950公里，即在北緯14.7度，東經117.9度附近，其中心附近最高持續風速約為每小時55公里，向西北偏西移動，時速23公里，大致移向海南島一帶，並逐漸增強。"
  },
];

//Warning
const warnWarnings = [
  {
    icon: "warn_icon/h1.jpg",
    text: "酷熱警報於本地時間06月30日13時20分發出，預料本澳天氣酷熱。"
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = `位於南海的低壓區今日凌晨已經增強為熱帶低氣壓。預料熱帶低氣壓將會在今日稍後至明日初時進入本澳800公里範圍。本台將會在明日凌晨至早上發出熱帶氣旋警報。

在高壓脊及熱帶低氣壓的共同影響下，珠江口一帶週五稍後至週六風勢加強，橋上及空曠地方風力可能達6級，間中7級。預計熱帶低氣壓將會逐漸移向海南島，並在週五至週六最接近本澳，在本澳西南500公里左右掠過，隨後移向北部灣。

受熱帶低氣壓及暖濕偏南氣流相關的水汽影響，本週後期至週末期間持續有驟雨及雷暴，雨勢間中較大，累積雨量可能達100毫米或以上。

另外，週五至週六早上的潮高達2.8米左右，同時受潛在熱帶氣旋影響，有機會出現0.5米風暴潮增水，內港一帶低窪地區有可能出現輕微水浸，本台會考慮在明日發出風暴潮觀察警報。請市民提高警惕，遠離低漥地區並留意最新天氣資訊。`;

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
