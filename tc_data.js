const tcWarnings = [
  {
    icon: "warn_icon/t4.jpg",
    text: "受超強颱風影響，八號風球現正生效。預料將維持至晚間。（2025-09-23 18:00更新）"
  },
  {
    icon: "warn_icon/s1.jpg",
    text: "紅色風暴潮警告已發出。低窪地區可能出現水浸，最高水位約1.5至2.5米。"
  }
];

const forecastInfo = {
  updated: "05-29 14:00 MST"
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
  {lat:15.7, lon:133.0, time: "05-29 14H", wind: 85},  

];

const forecastPoints = [
  {lat:15.7, lon:133.0, time: "05-29 14H",wind: 85,
   
    wind41: { ne: 220, se: 240, sw: 180, nw: 180 }, 
    wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
   
  },

  {lat:16.8, lon:131.2, time:"05-30 02H", wind: 105},
  {lat:17.9, lon:129.7, time:"05-30 14H", wind: 130},
  {lat:19.4, lon:128.5, time:"05-31 11H", wind: 155},
  {lat:24.2, lon:126.2, time:"06-01 11H", wind: 175},
  {lat:29.0, lon:128.8, time:"06-02 11H", wind: 130},
  {lat:33.7, lon:136.8, time:"06-03 11H", wind: 105},
];

window.tcInfo = {
  name: "薔薇 (2606)", 
  wind: forecastPoints[0].wind,
  pressure: 990
};

 
