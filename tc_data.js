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
  {lat:19.0, lon:118.3, time:"06-04 14H", wind: 40},
];

const forecastPoints = [
  {lat:19.0, lon:118.3, time: "06-04 14H", wind: 40,
  
    wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
  },
  { lat: 20.6, lon: 119.2, time: "06-05 02H", wind: 40 },  
  { lat: 22.4, lon: 121.1, time: "06-05 14H", wind: 40 }

];

window.tcInfo = {
  name: "低壓區 (91W)", 
  wind: forecastPoints[0].wind,
  pressure: 1006
};
