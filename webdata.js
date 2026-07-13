//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"warn_icon/t1.jpg",
    text: "注意警報於本地時間07月13日22時20分發出。表示有一個潛在熱帶氣旋位於本澳800公里範圍內，未來24小時內將發展成熱帶氣旋，並有可能對澳門構成較大威脅。"
  },
  
  {
    icon:"",
    text: "上午6時，99W 集結在氹仔大潭山氣象局東南偏東約57公里，即在北緯21.90度，東經114.05度附近，其中心附近最高持續風速約為每小時35公里，向西或西北偏西移動，時速20公里，大致移向澳門以南海域。按照現時預測路徑，目前位於香港以南海域的低壓區將會在未來數小時繼續向偏西或西北偏西方向移動，並會在本澳以南20公里處掠過，除非該低壓區強度有所增強，否則注意警報將會在今日早上維持。受到低壓區相關的雨帶影響，本澳今日有持續驟雨及幾陣雷暴。"
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
const swtText = `其外圍雨帶已開始影響南海北部及珠江口，隨著其逐漸靠近，其核心雨帶即將影響本澳，今日有驟雨及雨勢頗大，同時與其及西南季候風相關的大雨及狂風雷暴將於會在今日持續影響珠江口一帶，累積雨量較多，不排除會間中出現短時強降雨，屆時低窪地區不排除有水浸風險。因此，市民應完成適當的預防措施，留意最新天氣訊息。

市民應特別留意未來數日天氣資訊，做好防風及防水浸措施。`;

//Alert Tips
const alertipsText = `在天文大潮及低壓區共同影響下，今日早上海水高度會上升至海圖基準面以上約3.3-3.4米左右，低窪地區有機會出現輕微水浸。`;

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
  {lat:21.5, lon:115.1, time: "07-14 01H", wind: 40},
  {lat:21.7, lon:114.8, time: "07-14 02H", wind: 40},
  {lat:21.8, lon:114.6, time: "07-14 03H", wind: 40},
  {lat:21.8, lon:114.4, time: "07-14 04H", wind: 40},
  
  
];
const hours = [0,4];
const radii = [15,40];
const macau = [22.1595, 113.5685];

const forecastPoints = [
   //Forecast hour 0: base point (0h)
  {
    lat:21.8, lon:114.4, time: "07-14 04H", wind: 40,
    wind41: { ne: 0, nw: 0, sw: 0, se: 0 }, 
    wind88: { ne: 0, nw: 0, sw: 0, se: 0 } 
  },
  {lat:22.0, lon:114, time: "07-02 08H", wind: 40},

];

window.tcInfo = {
  name: "99W", 
  wind: forecastPoints[0].wind,
  pressure: 1002
};

//  { lat: 42.5, lon: 149.0, time: "06-09 14H", wind: '-' }, 



//{lat:19.5, lon:118.6, time: "06-04 17H", wind: 45,
  
    //wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    //wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
 // }，

const TC_WARNING_DATA = {
  mainTitle: "受熱帶氣旋 99W 可能發佈之警報",
  updateTimeText: "2026-07-14  05:30 MST 更新",
  tableRows: [
    { signal: "注意警報", period: "07月13日22時20分發出", probability: "現正生效" },
    { signal: "戒備警報", period: "14日早上", probability: "中等" },
    { signal: "強風警報", period: "14日日間", probability: "偏低" },
    { signal: "烈風警報", period: "", probability: "" },
    { signal: "暴風警報", period: "", probability: "" },
    { signal: "颶風警報", period: "", probability: "" },
    { signal: "風暴潮觀察警報", period: "14日早上", probability: "偏低" },
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
