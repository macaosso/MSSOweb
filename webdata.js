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
    text: "酷熱警報於本地時間06月30日13時20分發出，預料本澳天氣酷熱。"
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = `受到副熱帶高壓脊的持續覆蓋，預料澳門未來一兩日天氣酷熱，部份地區最高氣溫有可能達34度以上。
現時位於菲律賓附近的低壓區96W 正在發展。預料明後兩日將會逐漸發展，有可能發展成熱帶氣旋，並進入本澳800公里範圍。視乎該潛在熱帶氣旋的發展速度及移動路徑，屆時將會考慮發出熱帶氣旋警報。
由於在高壓脊及潛在熱帶氣旋的共同影響下，其東側強風區較為廣闊。隨着其逐漸靠近海南島一帶，週五稍後至週六本澳風勢較大。
同時，受潛在熱帶氣旋及暖濕偏南氣流相關的水汽影響，本週後期至週末期間持續有驟雨及雷暴，雨勢間中較大，累積雨量可能達100毫米或以上。
另外，週五至週六早上的潮高達2.8米左右，同時受潛在熱帶氣旋影響，有機會出現0.5米風暴潮增水，內港一帶低窪地區有可能出現輕微水浸，請市民提高警惕，並留意最新天氣資訊。`;

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
