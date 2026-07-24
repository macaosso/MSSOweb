//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"warn_icon/t2.jpg",
    text: "戒備警報於本地時間07月24日22時20分發出。表示有一熱帶氣旋進入澳門800公里範圍，未來24-48小時內將逐漸影響澳門。視乎本地風力變化，及「紅霞」強風區與珠江口的距離，考慮是否需要在明日下午改發強風警報。"
  },
  
  {
    icon:"",
    text: "「紅霞」已增強為強烈熱帶風暴。下午4時，強烈熱帶風暴「紅霞」集結在本澳東南偏東約890公里，即在北緯18.9度，東經121.4度附近，其中心附近最高持續風速約為每小時90公里，向西北偏西移動，時速28公里，移向呂宋北部。"
  },
];

//Warning
const warnWarnings = [
  {
    icon: "warn_icon/h1.jpg",
    text: "酷熱警報，現正生效。預料本澳今日天氣酷熱，最高氣溫約34度，部分地區35-36度。"
  },
  {
    icon: "",
    text: ""
  }
];

//Special Warning Tips
const swtText = `按照現時預測路徑，「紅霞」會逐漸增強，週六稍後至週日日間移向珠江口至廣東東部一帶，並最接近本澳，在本澳東北300公里內掠過，隨後移入廣東內陸。但由於「紅霞」移動路徑亦存在一定變數，實際對本澳影響程度仍然未能確定。預計本澳風力週六稍後會逐漸增強，週日風力達6級，若「紅霞」進一步採取較預期偏西路徑，風力影響可能更大，屆時橋上及空曠地方風力可能間中達7-8級。

受到「紅霞」及西南氣流相關的水汽影響，本澳週末至下週初期間持續有大驟雨及雷暴，雨勢間中較大，累積雨量可能達100毫米或以上。

另外，週日早上的潮高達2.6米，但由於現時預計「紅霞」將會在本澳以東掠過。預計內港一帶低窪地區因風暴潮而出現水浸機會較低。

市民應完成適當的預防措施，特別留意週末及下週初天氣資訊。`;

//Alert Tips
const alertipsText = `高溫預警提示於本地時間07月21日20時20分發出。表示澳門高溫天氣持續。預計本澳未來數日日間天氣相當炎熱，最高氣溫將達到32度以上。`;

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

const pastTrackPoints = [
  {lat:13.5, lon:136, wind:45},
  {lat:13.6, lon:135.2, wind:45},
  {lat:13.7, lon:134, wind:45},
  {lat:14.4, lon:133.2, wind:45},
  {lat:14.8, lon:131.8, wind:50},
  {lat:15.0, lon:130.2, wind:50},
  {lat:15.6, lon:129.4, wind:55},
  {lat:16.8, lon:128.0, wind:55},
  {lat:17.2, lon:126.5, wind:65},
  {lat:17.6, lon:125.2, wind:75},
  {lat:18.3, lon:123.8, wind:85},
  {lat:18.7, lon:122.3, wind:90},
  {lat:19.3, lon:120.4, wind:105}
];


const hours = [0,12,24,36,48,72,96];
const radii = [15, 50, 100, 130, 170, 255, 345];
const macau = [22.1595, 113.5685];

const forecastPoints = [
  { lat: 19.3, lon: 120.4, time: "07-24 20H", wind: 105,
    wind41: { ne: 0, nw: 0, sw: 0, se: 0 }, 
    wind88: { ne: 0, nw: 0, sw: 0, se: 0 }
  },
  { lat: 20.0, lon: 118.2, time: "07-25 08H", wind: 120 },
  { lat: 21.4, lon: 116.1, time: "07-25 20H", wind: 140 },
  { lat: 23.0, lon: 114.4, time: "07-26 08H", wind: 110 },
  { lat: 24.8, lon: 113.5, time: "07-26 20H", wind: 85 },
  { lat: 28.5, lon: 113.2, time: "07-27 20H", wind: 45 },
  { lat: 30.4, lon: 112.6, time: "07-28 08H", wind: 40 }
\];
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
    { signal: "戒備警報", period: "07月24日22時20分發出", probability: "已發出" },
    { signal: "強風警報", period: "25日下午至黃昏", probability: "偏高至高" },
    { signal: "烈風警報", period: "26日初時", probability: "中等" },
    { signal: "暴風警報", period: "", probability: "" },
    { signal: "颶風警報", period: "", probability: "" },
    { signal: "風暴潮觀察警報", period: "25日晚上至26日早上", probability: "中等" },
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
