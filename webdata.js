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
    text: "非常酷熱警報於本地時間08月08日08時20分發出。預計本澳今日天氣非常酷熱，最高氣溫約35 - 36度，部份地區可達37 - 38度。"
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = `現時位於北部灣附近的低壓區今日有所發展，暫時不排除該低壓區在未來一兩日進一步發展成熱帶氣旋的可能性，本台將留意其動向，評估發出熱帶氣旋警報之可能性。

熱帶氣旋「白海豚」現時正維持強颱風強度，未來兩三日持續向西移動，大致移向華東一帶。受到「白海豚」相關的外圍下沉氣流影響，本澳明後兩日天氣非常酷熱，市區最高氣溫可能達37度，部份地區極為酷熱。

由於天氣較為酷熱，高溫下極可能發生嚴重中暑（熱射病），這是威脅生命的情況。建議市民避免所有戶外活動及補充足夠水分，並尋找有空調的庇護所，若出現症狀請撥打急救電話。

高溫有機會觸發熱對流，明後兩日下午至黃昏有驟雨及可能有雷暴，部份地區雨勢可能較大。市民應留意最新天氣消息，做好適當預防措施。`;

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

//Tropical Cyclone Track
const forecastInfo = {
  updated: "2026-07-24 20:00 MST"
};

const pastPoints = [
  {lat:13.5, lon:136.0, time: "07-22 20H", wind:45},
  {lat:13.6, lon:135.2, time: "07-23 02H", wind:45},
  {lat:13.7, lon:134.0, time: "07-23 08H", wind:45},
  {lat:14.4, lon:133.2, time: "07-23 14H", wind:45},
  {lat:14.8, lon:131.8, time: "07-23 20H", wind:50},
  {lat:15.0, lon:130.2, time: "07-24 02H", wind:50},
  {lat:15.6, lon:129.4, time: "07-24 08H", wind:55},
  {lat:16.8, lon:128.0, time: "07-24 14H", wind:55},
  {lat:17.2, lon:126.5, time: "07-24 20H", wind:65},
  {lat:17.6, lon:125.2, time: "07-25 02H", wind:75},
  {lat:18.3, lon:123.8, time: "07-25 08H", wind:85},
  {lat:18.7, lon:122.3, time: "07-25 14H", wind:90},
  {lat:19.3, lon:120.4, time: "07-25 20H", wind:105}
];


const hours = [0,12,24,48,72,96];
const radii = [15, 50, 100, 170, 255, 345];
const macau = [22.1595, 113.5685];

const forecastPoints = [
  { lat: 19.3, lon: 120.4, time: "07-24 20H", wind: 105,
    wind41: { ne: 160, nw: 200, sw: 220, se: 180 }, 
    wind88: { ne: 70, nw: 100, sw: 100, se: 90 }
  },
  { lat: 20.0, lon: 118.2, time: "07-25 08H", wind: 120 },
  { lat: 21.4, lon: 116.1, time: "07-25 20H", wind: 140 },
  { lat: 24.8, lon: 113.5, time: "07-26 20H", wind: 85 },
  { lat: 28.5, lon: 113.2, time: "07-27 20H", wind: 45 },
  { lat: 30.4, lon: 112.6, time: "07-28 08H", wind: 40 }
];
window.tcInfo = {
  name: "紅霞 (2612）", 
  wind: forecastPoints[0].wind,
  pressure: 980
};

//  { lat: 42.5, lon: 149.0, time: "06-09 14H", wind: '-' }, 



//{lat:19.5, lon:118.6, time: "06-04 17H", wind: 45,
  
    //wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    //wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
 // }，

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
