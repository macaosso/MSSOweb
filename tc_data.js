const tcWarnings = [
  {
    text: "「薔薇」已經增強成為強烈熱帶風暴，晚上11時，「薔薇」集結在本澳東南偏東約2010公里，即北緯16.6度，東經131.8度，其中心附近最高持續風速約為每小時90公里，向西北移動，時速21公里，未來數日會逐漸增強，大致移向台灣以東海域至沖繩一帶。"
  },
];

//text:
//icon:

const forecastInfo = {
  updated: "05-29 23:00 MST"
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
  {lat:16.6, lon:131.8, time: "05-29 23H", wind: 90}, 
];

const forecastPoints = [
  {lat:16.6, lon:131.8, time: "05-29 23H",wind: 90,
   
    wind41: { ne: 220, se: 260, sw: 200, nw: 180 }, 
    wind88: { ne: 60, se: 100, sw: 60,  nw: 40 } 
   
  },

  {lat:17.7, lon:130.0, time:"05-30 11H", wind: 120},
  {lat:19.6, lon:128.3, time:"05-30 23H", wind: 140},
  {lat:22.9, lon:127.1, time:"05-31 23H", wind: 165},
  {lat:27.1, lon:128.1, time:"06-01 23H", wind: 155},
  {lat:32.1, lon:134.5, time:"06-02 23H", wind: 130},
  {lat:35.7, lon:143.1, time:"06-03 23H", wind: 90},
];

window.tcInfo = {
  name: "薔薇 (2606)", 
  wind: forecastPoints[0].wind,
  pressure: 985
};

 
