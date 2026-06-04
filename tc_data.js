const tcWarnings = [
  {
    text: ""
  },
];

//text:
//icon:

const forecastInfo = {
  updated: "06-01 17:00 MST"
};

const pastPoints = [
  {lat:19.0, lon:118.3, time:"06-04 14H", wind: 45},
];

const forecastPoints = [
  {lat:19.0, lon:118.3, time: "06-04 14H", wind: 90,
  
    wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
  },
  { lat: 33.6, lon: 136, time: "06-03 08H", wind: 90 },  
  { lat: 35.2, lon: 140.7, time: "06-03 20H", wind: 85 },
  { lat: 36.7, lon: 146.6, time: "06-04 20H", wind: 85 },
  { lat: 36.4, lon: 149.8, time: "06-05 20H", wind: "-" }

];

window.tcInfo = {
  name: "低壓區 (91W)", 
  wind: forecastPoints[0].wind,
  pressure: 1006
};
