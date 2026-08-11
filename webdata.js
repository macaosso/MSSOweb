//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"",
    text: ""
  },
  
  {
    icon:"",
    text: ""
  },
];

//Warning
const warnWarnings = [
  {
    icon: "warn_icon/h2.jpg",
    text: "非常酷熱警報於本地時間08月10日17時20分發出。隨著熱帶氣旋「白海豚」逐漸減弱及向北移動，預計本澳極為酷熱天氣會逐漸減退，但明日最高氣溫仍然會達35 - 36度，部份地區可達37度。於08月10日錄得今年第27個酷熱日。"
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = ``;

//Alert Tips
const alertipsText = `高溫預警提示於本地時間08月04日12時40分發出。表示澳門高溫天氣持續。`;

//Weather Forecast
const forecastRaw = `預料未來數日逐漸轉受高空反氣旋影響，驟雨減少，及後本澳日間陽光充沛及天氣酷熱。目前位於菲律賓以東海域的低壓區，本週末期有機會發展成熱帶氣旋並進入南海北部，但目前移動路徑仍存在較大不確定性。下週初期本澳雷雨增多及風勢較大。

07月21日（三）  26 - 31 °C   75 - 95 %
大致多雲，間中有驟雨，初時雨勢較為頻密，有幾陣雷暴。

07月16日（四）  26 - 31 °C   75 - 90 %
大致多雲，初時間中有驟雨及有幾陣雷暴。日間短暫時間有陽光。

更新時間：2026-07-15 10:00 MST
`;

// 氣溫
const chartRightDate = "2026-07-15 10:00 MST";

const label24hX = ["00H","04H","08H",
                   "12H","16H","23H"];
const temp24h = [26,26,28,30,30,29];

const label7dX = [15,16,17,18,19,20,21];
const temp7dMax = [31,31,32,32,32,32,31];
const temp7dMin = [26,26,27,26,26,26,26];

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
