//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"warn_icon/t2.jpg",
    text: "戒備警報於本地時間07月14日10時40分發出。表示有一熱帶氣旋進入澳門800公里範圍，未來24-48小時內將逐漸影響澳門。"
  },
  
  {
    icon:"",
    text: "下午2時，熱帶低氣壓 集結在氹仔大潭山氣象局西北偏北約17公里，即在北緯22.3度，東經113.5度附近，其中心附近最高持續風速約為每小時45公里，向西或西北偏西移動，時速10公里。移入內陸，並逐漸減弱。"
  },
];

//Warning
const warnWarnings = [
  {
    icon: "",
    text: ""
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = `熱帶低氣壓已經在今日正午12時至下午1時最接近澳門，在本澳東北偏北10公里左右掠過。而根據風場資料顯示，熱帶低氣壓於今日下午1時左右在本澳以北的珠海市登陸，本澳風向亦由東北風逐漸轉為西南風。由於熱帶低氣壓逐漸移入內陸，遠離澳門，強度將會逐漸減弱，本澳受其影響程度逐漸降低，當熱帶低氣壓對澳門影響進一步降低時，本台會考慮取消所有熱帶氣旋警報。但同時，受到達強風程度的西南季候風影響，本澳今日風勢會有所加強，本台亦會考慮發出相應大風提示。

與熱帶低氣壓相關的外圍雨帶現時正集中在珠江口西部及南海北部，並為該區帶來頻密驟雨及雷暴，隨著熱帶低氣壓逐漸向西北偏西方向遠離本澳，位於南海北部的雨帶將會逐漸北上，並有可能在今日稍後影響本澳，因此，現時預計今日下午至晚間與雨勢有所加強，部份地區不排除會間中出現短時強降雨，屆時低窪地區不排除有水浸風險。因此，市民應完成適當的預防措施，留意最新天氣訊息。`;

//Alert Tips
const alertipsText = ``;

//Weather Forecast
const forecastRaw = `副熱帶高壓脊仍然會在未來一兩日覆蓋華南沿岸，該區天氣穩定，日間天氣酷熱。隨着副熱帶高壓脊會有所減弱，受低層偏南風加強影響，廣東沿海驟雨增多及有雷暴，「米克拉」在下週初逐漸移向日本一帶，屆時副熱帶高壓脊會重新增強，本澳天氣轉趨穩定，日間天氣酷熱。

06月23日（二）  29 - 34 °C   60 - 80 %
大致天晴，日間天氣酷熱。

06月24日（三）  29 - 35 °C   60 - 80 %
大致天晴，日間天氣酷熱。

更新時間：2026-06-22 14:00 MST
`;

// 氣溫
const chartRightDate = "2026-07-14 05:00 MST";

const label24hX = ["00H","04H","08H",
                   "12H","16H","23H"];
const temp24h = [30,29,32,34,33,31];

const label7dX = ["23","24","25","26","27","28"];
const temp7dMax = [34,35,34,34,33,32,32];
const temp7dMin = [29,29,29,28,28,27,27];

//Tropical Cyclone Track
const forecastInfo = {
  updated: "2026-07-14 05:00 MST"
};

const pastPoints = [
  // Match STORM_DATA.past_track lats/lons sequence
  {lat:21.3, lon:115.5, time: "07-14 00H", wind: 40},
  {lat:21.5, lon:115.3, time: "07-14 01H", wind: 40},
  {lat:21.7, lon:114.9, time: "07-14 02H", wind: 40},
  {lat:21.8, lon:114.7, time: "07-14 03H", wind: 40},
  {lat:21.8, lon:114.6, time: "07-14 04H", wind: 40},
  {lat:21.9, lon:114.5, time: "07-14 05H", wind: 40},
  {lat:21.9, lon:114.4, time: "07-14 06H", wind: 40},
  {lat:21.9, lon:114.3, time: "07-14 07H", wind: 40},
  {lat:22.0, lon:114.1, time: "07-14 08H", wind: 40},
  {lat:22.03, lon:114.0, time: "07-14 09H", wind: 40},
  {lat:22.05, lon:113.9, time: "07-14 10H", wind: 40},
  {lat:22.1, lon:113.8, time: "07-14 11H", wind: 45},
  {lat:22.2, lon:113.7, time: "07-14 12H", wind: 45},
  {lat:22.25, lon:113.6, time: "07-14 13H", wind: 45},
  {lat:22.3, lon:113.5, time: "07-14 14H", wind: 45},
  
];
const hours = [0,2];
const radii = [5,10];
const macau = [22.1595, 113.5685];

const forecastPoints = [
   //Forecast hour 0: base point (0h)
  {
    lat:22.3, lon:113.5, time: "07-14 14H", wind: 45,
    wind41: { ne: 0, nw: 0, sw: 0, se: 0 }, 
    wind88: { ne: 0, nw: 0, sw: 0, se: 0 } 
  },
  {lat:22.35, lon:113.3, time: "07-14 16H", wind: 40},

];

window.tcInfo = {
  name: "99W", 
  wind: forecastPoints[0].wind,
  pressure: 1000
};

//  { lat: 42.5, lon: 149.0, time: "06-09 14H", wind: '-' }, 



//{lat:19.5, lon:118.6, time: "06-04 17H", wind: 45,
  
    //wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    //wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
 // }，

const TC_WARNING_DATA = {
  mainTitle: "受熱帶氣旋 99W 可能發佈之警報",
  updateTimeText: "2026-07-14  14:30 MST 更新",
  tableRows: [
    { signal: "注意警報", period: "07月13日22時20分發出", probability: "" },
    { signal: "戒備警報", period: "07月14日10時40分發出", probability: "現正生效" },
    { signal: "強風警報", period: "", probability: "低" },
    { signal: "烈風警報", period: "", probability: "" },
    { signal: "暴風警報", period: "", probability: "" },
    { signal: "颶風警報", period: "", probability: "" },
    { signal: "風暴潮觀察警報", period: "", probability: "低" },
    { signal: "風暴潮戒備警報", period: "", probability: "" },
    { signal: "風暴潮危險警報", period: "", probability: "" },    
  ]
};

function renderTcWarningTable(data) {
  // 1. 更新卡片主標題 (JS完全控制)
  const titleEl = document.querySelector("#tcForecastTableCard .tc-forecast-title");
  if(titleEl) titleEl.textContent = data.mainTitle;

  // 2. 更新卡片右側更新時間
  const timeEl = document.querySelector("#tcForecastTableCard .tc-update-time");
  if(timeEl) timeEl.textContent = data.updateTimeText;

  // 3. 拿到表格容器，清空舊內容
  const container = document.getElementById("tcTableContent");
  if(!container) return;
  container.innerHTML = "";

  // 4. 拼裝完整表格HTML
  let tableHtml = `
    <table class="tc-warning-table">
      <thead>
        <tr>
          <th>警告信號</th>
          <th>預計可能發佈時段</th>
          <th>可能性</th>
        </tr>
      </thead>
      <tbody>
  `;
  // 空probability自動跳過/隱藏該行
  data.tableRows.forEach(row => {
    if (!row.probability || row.probability.trim() === "") return;
    tableHtml += `
      <tr>
        <td>${row.signal}</td>
        <td>${row.period}</td>
        <td>${row.probability}</td>
      </tr>
    `;
  });
  tableHtml += `</tbody></table>`;

  // 5. 插入到頁面
  container.innerHTML = tableHtml;
}

function refreshTcWarningTable(newData) {
  renderTcWarningTable(newData);
}

window.addEventListener("DOMContentLoaded", () => {
  renderTcWarningTable(TC_WARNING_DATA);
});
