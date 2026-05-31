const tcWarnings = [
  {
    text: ""
  },
];

//text:
//icon:

const forecastInfo = {
  updated: "05-31 22:00 MST"
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
  {lat:20.8, lon:128.2, time: "05-31 08H", wind: 140}, 
  {lat:21.8, lon:127.9, time: "05-31 14H", wind: 140},  
  {lat:22.7, lon:127.7, time: "05-31 20H", wind: 140},
];

const forecastPoints = [
  {lat:22.7, lon:127.7, time: "05-31 20H",wind: 140,
   
    wind41: { ne: 230, se: 270, sw: 220, nw: 200 }, 
    wind88: { ne: 80, se: 120, sw: 80,  nw: 60 } 
  },
  { lat: 24.8, lon: 127.6, time: "06-01 08H", wind: 130 },  
  { lat: 26.8, lon: 127.7, time: "06-01 20H", wind: 120 },
  { lat: 32.0, lon: 133.2, time: "06-02 20H", wind: 110 },
  { lat: 36.4, lon: 142.8, time: "06-03 20H", wind: 105 },
  { lat: 37.7, lon: 147.6, time: "06-04 20H", wind: 85 },
  { lat: 37.7, lon: 150.4, time: "06-05 20H", wind: "-" }

];

window.tcInfo = {
  name: "薔薇 (2606)", 
  wind: forecastPoints[0].wind,
  pressure: 960
};
