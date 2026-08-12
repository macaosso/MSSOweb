//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"",
    text: ""
  },
  
  {
    icon:"",
    text: "在 15 時，熱帶風暴「浪卡」集結在澳門東約 3250 公里，即在北緯 24.0 度，東經 145.3 度附近，其中心附近最高持續風速約為每小時 65 公里，向 東北 移動，時速 12 公里，強度略為增強。"
  },
];

//Warning
const warnWarnings = [
  {
    icon: "warn_icon/h2.jpg",
    text: "非常酷熱警報，現正生效。預計本澳明日最高氣溫將會達35 - 36度，部份地區可達37度。於08月11日錄得今年第28個酷熱日。"
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = `（13/8 02:00）隨著熱帶氣旋「白海豚」殘餘環流持續深入內陸，將逐步與高空槽耦合。同時，西南季風再度活躍，重新主導華南的水汽輸送，該區相對濕度上升，再加上早前的長時間高溫天氣，大氣較為不穩定。今日開始，雖然日間天氣仍然酷熱，但下午至晚上局部強雷暴天氣將陸續發展，高溫天氣略為緩解。市民應留意天氣變化。`;

//Alert Tips
const alertipsText = `高溫預警提示於本地時間08月04日12時40分發出。表示澳門高溫天氣持續。`;

//受熱帶氣旋 99W 可能發佈之警報
//2026-07-14  16:40 MST 更新

const TC_WARNING_DATA = {
  mainTitle: "受熱帶氣旋「紅霞」可能發佈之警報",
  updateTimeText: "2026-07-24  22:00 MST 更新",
  tableRows: [
    { signal: "注意警報", period: "07月24日08時20分發出", probability: "" },
    { signal: "戒備警報", period: "07月24日22時20分發出", probability: "" },
    { signal: "強風警報", period: "25日下午至黃昏", probability: "" },
    { signal: "烈風警報", period: "26日初時", probability: "" },
    { signal: "暴風警報", period: "", probability: "" },
    { signal: "颶風警報", period: "", probability: "" },
    { signal: "風暴潮觀察警報", period: "25日晚上至26日早上", probability: "" },
    { signal: "風暴潮戒備警報", period: "", probability: "" },
    { signal: "風暴潮危險警報", period: "", probability: "" },    
  ]
};

function renderTcWarningTable(data) {
  // Get the whole card wrapper element
  const cardWrapper = document.getElementById("tcForecastTableCard");
  if (!cardWrapper) return;

  // Check if ALL probability are empty
  const hasValidProbability = data.tableRows.some(row => 
    row.probability && row.probability.trim() !== ""
  );

  // Hide entire card box if no valid probability exists
  if (!hasValidProbability) {
    cardWrapper.style.display = "none";
    return;
  }

  // Show card again when there is valid probability data
  cardWrapper.style.display = "block";

  // 1. Update main title
  const titleEl = cardWrapper.querySelector(".tc-forecast-title");
  if(titleEl) titleEl.textContent = data.mainTitle;

  // 2. Update update time
  const timeEl = cardWrapper.querySelector(".tc-update-time");
  if(timeEl) timeEl.textContent = data.updateTimeText;

  // 3. Clear old table content
  const container = document.getElementById("tcTableContent");
  if(!container) return;
  container.innerHTML = "";

  // 4. Build table HTML
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
  // Only render rows with non-empty probability
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

  // 5. Inject table into page
  container.innerHTML = tableHtml;
}

function refreshTcWarningTable(newData) {
  renderTcWarningTable(newData);
}

window.addEventListener("DOMContentLoaded", () => {
  renderTcWarningTable(TC_WARNING_DATA);
});
