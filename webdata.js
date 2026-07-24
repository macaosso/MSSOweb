//Tropical Cyclone Warning
const tcWarnings = [
  {
    icon:"warn_icon/t1.jpg",
    text: "注意警報於本地時間07月24日08時20分發出。表示有一熱帶氣旋進入澳門1200公里範圍，未來24-72小時將進入澳門800公里範圍，並對澳門構成較大威脅。「紅霞」將在今日晚間進入本澳800公里範圍。本台將視乎情況在今日晚間至明日凌晨改發戒備警報。"
  },
  
  {
    icon:"",
    text: "上午8時，熱帶風暴「紅霞」集結在本澳東南約1150公里，即在北緯18.3度，東經123.8度附近，其中心附近最高持續風速約為每小時85公里，向西北偏西移動，時速28公里，移向呂宋北部。"
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
  updated: "2026-07-15 00:00 MST"
};

const pastPoints = [
  {lat:13.5, lon:136.0, wind: 40},
  {lat:13.5, lon:136.0, wind: 40}
];

const hours = [0,12,24,48,72,96,120];
const radii = [15, 50, 100, 170, 255, 345, 465];
const macau = [22.1595, 113.5685];

const forecastPoints = [
  { lat: 13.5, lon: 136.0, time: "07-21 20H", wind: 45,
    wind41: { ne: 0, nw: 0, sw: 0, se: 0 }, 
    wind88: { ne: 0, nw: 0, sw: 0, se: 0 }
  },
  { lat: 14.3, lon: 133.6, time: "07-22 08H", wind: 55 },
  { lat: 15.3, lon: 131.0, time: "07-22 20H", wind: 65 },
  { lat: 17.0, lon: 126.1, time: "07-23 20H", wind: 85 },
  { lat: 19.2, lon: 121.1, time: "07-24 20H", wind: 90 },
  { lat: 21.8, lon: 116.6, time: "07-25 20H", wind: 130 },
  { lat: 24.7, lon: 114.4, time: "07-26 20H", wind: 90 }
];

window.tcInfo = {
  name: "92W", 
  wind: forecastPoints[0].wind,
  pressure: 1004
};

//  { lat: 42.5, lon: 149.0, time: "06-09 14H", wind: '-' }, 



//{lat:19.5, lon:118.6, time: "06-04 17H", wind: 45,
  
    //wind41: { ne: 0, se: 0, sw: 0, nw: 0 }, 
    //wind88: { ne: 0, se: 0, sw: 0,  nw: 0 } 
 // }，

//受熱帶氣旋 99W 可能發佈之警報
//2026-07-14  16:40 MST 更新

const TC_WARNING_DATA = {
  mainTitle: "受熱帶氣旋 99W 可能發佈之警報",
  updateTimeText: "2026-07-14  16:40 MST 更新",
  tableRows: [
    { signal: "注意警報", period: "07月13日22時20分發出", probability: "" },
    { signal: "戒備警報", period: "07月14日16時40分取消", probability: "" },
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
