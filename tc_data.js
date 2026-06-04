const tcWarnings = [
  {
    text: "下午5時，位於南海東北部的熱帶低氣壓集結在本澳東南偏東約600公里，即在北緯19.5度，東經118.6度附近，其中心附近最高持續風速約為每小時45公里，向東北移動，時速20公里，移向台灣南部一帶。(2026-06-04 17:00 MST)"
  },
];

//text:
//icon:

const forecastInfo = {
  updated: "06-04 14:00 MST"
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
  { lat: 22.4, lon: 121.1, time: "06-05 14H", wind: 45 },
  { lat: 25.6, lon: 124.2, time: "06-06 14H", wind: 65 },
  { lat: 31.1, lon: 131.2, time: "06-07 14H", wind: 75 },
  { lat: 34.8, lon: 140.4, time: "06-08 14H", wind: 65 },
  { lat: 42.5, lon: 149.0, time: "06-09 14H", wind: '-' },

];

window.tcInfo = {
  name: " 91W", 
  wind: forecastPoints[0].wind,
  pressure: 1006
};
