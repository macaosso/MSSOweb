const tcWarnings = [
  {
    text: "「薔薇」已經增強成為強烈熱帶風暴，晚上10時，「薔薇」集結在本澳東南偏東約2000公里，即北緯16.4度，東經131.7度，其中心附近最高持續風速約為每小時90公里，向西北移動，時速20公里，未來數日會逐漸增強，大致移向台灣以東海域至沖繩一帶。"
  },
];

//text:
//icon:

const forecastInfo = {
  updated: "05-29 22:00 MST"
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
  {lat:16.4, lon:131.7, time: "05-29 22H", wind: 90}, 
];

const forecastPoints = [
  {lat:16.4, lon:131.7, time: "05-29 22H",wind: 90,
   
    wind41: { ne: 220, se: 260, sw: 200, nw: 180 }, 
    wind88: { ne: 60, se: 100, sw: 60,  nw: 40 } 
   
  },

  {lat:17.8, lon:129.8, time:"05-30 10H", wind: 120},
  {lat:18.9, lon:128.5, time:"05-30 22H", wind: 155},
  {lat:22.3, lon:126.7, time:"05-31 22H", wind: 175},
  {lat:26.4, lon:126.4, time:"06-01 22H", wind: 140},
  {lat:31.2, lon:132.1, time:"06-02 22H", wind: 120},
  {lat:35.5, lon:141.4, time:"06-03 22H", wind: 90},
];

window.tcInfo = {
  name: "薔薇 (2606)", 
  wind: forecastPoints[0].wind,
  pressure: 985
};

 
