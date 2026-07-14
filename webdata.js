//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"",
    text: "戒備警報於本地時間07月14日16時40分取消。所有熱帶氣旋警報現已取消。"
  },
  
  {
    icon:"",
    text: "熱帶低氣壓已經減弱為低壓區。"
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
const swtText = `與低壓區相關的外圍雨帶現時正集中在珠江口西部及南海北部，並為該區帶來頻密驟雨及雷暴，位於南海北部的雨帶將會逐漸北上，並有可能在今日稍後影響本澳，因此，現時預計今日下午至晚間雨勢有所加強，同時受到達強風程度的西南季候風影響，本澳今日風勢會有所加強，本台亦會考慮發出相應大風提示。`;

//Alert Tips
const alertipsText = ``;

//Weather Forecast
const forecastRaw = `受廣東沿岸的低壓區及其南側西南氣流影響，預料本澳今日稍後至明日初時將有頻密驟雨及雷暴，雨勢有時頗大，同時風勢較大並伴隨陣風。展望本週後期本澳仍然受西南氣流影響，天色持續以多雲為主及有幾陣雷雨。

07月14日（二）  26 - 30 °C   75 - 90 %
大致多雲，間中有驟雨。

07月15日（三）  26 - 30 °C   75 - 90 %
大致多雲，間中有驟雨，初時雨勢較為頻密，有幾陣雷暴。

更新時間：2026-07-14 15:00 MST
`;

// 氣溫
const chartRightDate = "2026-07-14 15:00 MST";

const label24hX = ["00H","04H","08H",
                   "12H","16H","23H"];
const temp24h = [29,29,28,26,26,27];

const label7dX = [14,15,16,17,18,19,20];
const temp7dMax = [30,30,30,31,32,32,31];
const temp7dMin = [26,26,26,27,26,26,26];

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
  updateTimeText: "2026-07-14  16:40 MST 更新",
  tableRows: [
    { signal: "注意警報", period: "07月13日22時20分發出", probability: "" },
    { signal: "戒備警報", period: "07月14日16時40分取消", probability: "現已取消" },
    { signal: "強風警報", period: "", probability: "" },
    { signal: "烈風警報", period: "", probability: "" },
    { signal: "暴風警報", period: "", probability: "" },
    { signal: "颶風警報", period: "", probability: "" },
    { signal: "風暴潮觀察警報", period: "", probability: "" },
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
