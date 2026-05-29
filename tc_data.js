const forecastInfo = {
  updated: "05-29 11:00 MST"
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
  {lat:15.5, lon:132.6, time: "05-29 11H", wind: 85},  

];

const forecastPoints = [
  {lat:15.5, lon:132.6, time: "05-29 11H", wind: 85,
   
    wind41: { ne: 220, se: 240, sw: 180, nw: 180 }, 
    wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
   
  },

  {lat:15.9, lon:133.0, time:"05-29 23H", wind: 105},
  {lat:16.7, lon:131.2, time:"05-30 11H", wind: 130},
  {lat:19.4, lon:128.5, time:"05-31 11H", wind: 155},
  {lat:23.2, lon:127.7, time:"06-01 11H", wind: 175},
  {lat:28.0, lon:129.1, time:"06-02 11H", wind: 130},
  {lat:33.3, lon:136.0, time:"06-03 11H", wind: 105},
];

window.tcInfo = {
  name: "薔薇 (2606)", 
  wind: forecastPoints[0].wind,
  pressure: 990
};

 
