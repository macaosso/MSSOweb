const tcWarnings = [
  {
    text: "上午5時，颱風「薔薇」集結在本澳以東約1570公里，即北緯20.4度，東經128.6度，其中心附近最高持續風速約為每小時130公里，向西北偏北移動，時速18公里，未來數日會逐漸增強，大致移向台灣以東海域至沖繩一帶。"
  },
];

//text:
//icon:

const forecastInfo = {
  updated: "05-31 05:00 MST"
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
  {lat:18.2, lon:129.5, time: "05-30 14H", wind: 120}, 
  {lat:19.1, lon:129.0, time: "05-30 20H", wind: 130}, 
  {lat:20.0, lon:128.4, time: "05-31 02H", wind: 130}, 
  {lat:20.4, lon:128.6, time: "05-31 05H", wind: 130}, 
  
];

const forecastPoints = [
  {lat:20.4, lon:128.6, time: "05-31 05H",wind: 130,
   
    wind41: { ne: 230, se: 270, sw: 220, nw: 200 }, 
    wind88: { ne: 80, se: 120, sw: 80,  nw: 60 } 
  },

  {lat:22.2, lon:127.7, time:"05-31 17H", wind: 155},
  {lat:23.6, lon:127.2, time:"06-01 05H", wind: 155},
  {lat:28.2, lon:128.8, time:"06-02 05H", wind: 145},
  {lat:33.4, lon:136.0, time:"06-03 05H", wind: 130},
  {lat:36.4, lon:144.9, time:"06-04 05H", wind: 105},
  {lat:38.0, lon:149, time:"06-05 05H", wind: "-"},
];

window.tcInfo = {
  name: "薔薇 (2606)", 
  wind: forecastPoints[0].wind,
  pressure: 965
};