const tcWarnings = [
  {
    text: "正午12時，颱風「薔薇」集結在本澳東南偏東約1760公里，即北緯17.9度，東經129.8度，其中心附近最高持續風速約為每小時130公里，向西北移動，時速17公里，未來數日會逐漸增強，大致移向台灣以東海域至沖繩一帶。"
  },
];

//text:
//icon:

const forecastInfo = {
  updated: "05-30 12:00 MST"
};

const pastPoints = [
  {lat:8.1, lon:137.3, time:"05-26 20H", wind: 45},
  {lat:8.5, lon:137.5, time:"05-27 02H", wind: 45},
  {lat:9.1, lon:137.6, time:"05-27 08H", wind: 50},
  {lat:9.6, lon:137.5, time:"05-27 14H", wind: 50},
  {lat:10.2, lon:137.3, time:"05-27 20H", wind: 55},
  {lat:11.3, lon:136.5, time: "05-28 02H", wind: 55},
  {lat:12.4, lon:136.3, time: "05-28 08H", wind: 65},  
  {lat:13.5, lon:136.0, time: "05-28 14H", wind: 65},
  {lat:13.8, lon:135.5, time: "05-28 20H", wind: 75},  
  {lat:14.3, lon:134.9, time: "05-29 02H", wind: 75},  
  {lat:15.2, lon:134.0, time: "05-29 08H", wind: 85},  
  {lat:15.6, lon:132.8, time: "05-29 14H", wind: 85},  
  {lat:16.2, lon:132.0, time: "05-29 20H", wind: 90}, 
  {lat:16.8, lon:131.0, time: "05-30 02H", wind: 105}, 
  {lat:17.3, lon:130.2, time: "05-30 08H", wind: 120}, 
  {lat:17.9, lon:129.8, time: "05-30 12H", wind: 130}, 
];

const forecastPoints = [
  {lat:17.9, lon:129.8, time: "05-30 12H",wind: 130,
   
    wind41: { ne: 230, se: 270, sw: 220, nw: 200 }, 
    wind88: { ne: 80, se: 120, sw: 80,  nw: 60 } 
  },

  {lat:19.4, lon:128.7, time:"05-31 00H", wind: 150},
  {lat:21.2, lon:128.0, time:"05-30 12H", wind: 165},
  {lat:25.6, lon:127.6, time:"05-31 12H", wind: 175},
  {lat:30.0, lon:130.9, time:"06-01 12H", wind: 145},
  {lat:34.2, lon:138.3, time:"06-02 12H", wind: 105},
  {lat:36.5, lon:146.8, time:"06-03 12H", wind: "-"},
];

window.tcInfo = {
  name: "薔薇 (2606)", 
  wind: forecastPoints[0].wind,
  pressure: 980
};