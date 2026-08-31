/* 圖標短代碼對照表 (對應 icons/ 資料夾)*/
const ICON_PRESETS = {
  // 冷/寒冷警告 (Cold)
  c1: "warn_icon/c1.jpg",
  c2: "warn_icon/c2.jpg",
  c3: "warn_icon/c3.jpg",

  // 極端天氣 (Extreme)
  e1: "warn_icon/e1.jpg",
  e2: "warn_icon/e2.jpg",

  // 酷熱警告 (Heat)
  h1: "warn_icon/h1.jpg",
  h2: "warn_icon/h2.jpg",
  h3: "warn_icon/h3.jpg",

  // 暴雨/雨量警告 (Rain)
  r0: "warn_icon/r0.jpg",
  r1: "warn_icon/r1.jpg",
  r2: "warn_icon/r2.jpg",
  r3: "warn_icon/r3.jpg",

  // 風暴潮/水浸警告 (Surge / Flood)
  s1: "warn_icon/s1.jpg",
  s2: "warn_icon/s2.jpg",
  s3: "warn_icon/s3.jpg",

  // 熱帶氣旋警告信號 (Tropical Cyclone)
  t0: "warn_icon/t1.jpg",
  t1: "warn_icon/t2.jpg",
  t2: "warn_icon/t3.jpg",
  t3: "warn_icon/t4.jpg",
  t4: "warn_icon/t5.jpg",
  t5: "warn_icon/t6.jpg"
};

// 1. 熱帶氣旋警告 (tcWarnings) [已新增至 4 條]
const tcText = [
  `凌晨1時，熱帶低氣壓「沙德爾」集結在本澳澳門西南偏南約360公里，即在北緯19.1度，東經112.4度附近，其中心附近最高持續風速約為每小時45公里，向東或東北偏東移動，時速約18公里，橫過南海北部。 

「沙德爾」現時正逐漸移離海南島，預計「沙德爾」會在南海有所發展，今明兩日有機會增強為熱帶風暴，但同時受該區的垂直風切影響，預計「沙德爾」進一步增強機會較低。部份電腦模式預計「沙德爾」在遠離澳門後會轉向偏西方向移動，再次靠近澳門，但路徑存在相當不確定性。

按照現時預測路徑，預料「沙德爾」會向東北偏東方向移動，今日於本澳東南300公里或以內掠過。受到地形屏蔽影響，本澳風力今日早上顯著增強機會不大，但在其外圍雨帶影響下，部份地方可能間中達6 - 7級，陣風8 - 9級。本台會視乎本地風力變化，考慮今日日間改發強風警報。  

市民應完成適當的預防措施，留意未來數日天氣資訊。`
];

const tcWarnings = [
  {
    icon: "t1",
    text: "戒備警報於本地時間08月31日19時40分發出。"
  },
  {
    icon: "",
    text: ""
  },
  {
    icon: "",
    text: ""
  },
  {
    icon: "",
    text: "" 
  }
];


// 2. 天氣警告 (warnWarnings) [已新增至 4 條]
const warnWarnings = [
  {
    icon: "",
    text: ""
  },
  {
    icon: "",
    text: ""
  },
  {
    icon: "",
    text: ""
  },
  {
    icon: "",
    text: ""
  }
];

// ==========================================================================
// 3. 特別天氣提示 (swtText) [原 1 條 + 新增 2 條]
// ==========================================================================
const swtText = [
  "",
  "",
  ""
];


// 4. 預警提示 (alertipsText) [原 1 條 + 新增 2 條]

const alertipsText = [
  "",
  "",
  ""
];


// 5. 天文潮特別提示 (tideText / TideText) [新增模組]

const tideText = [
  "",
  ""
];


// 6. 熱帶氣旋可能發佈之警報預測 (TC_WARNING_DATA)
const TC_WARNING_DATA = {
  mainTitle: "受熱帶氣旋「沙德爾」可能發佈之警報",
  updateTimeText: "2026-09-01  02:20 MST 更新",
  tableRows: [
    { signal: "注意警報", period: "", probability: "" },
    { signal: "戒備警報", period: "", probability: "現正生效" },
    { signal: "強風警報", period: "09月01日日間", probability: "中等" },
    { signal: "烈風警報", period: "", probability: "" },
    { signal: "暴風警報", period: "", probability: "" },
    { signal: "颶風警報", period: "", probability: "" },
    { signal: "風暴潮觀察警報", period: "", probability: "" },
    { signal: "風暴潮戒備警報", period: "", probability: "" },
    { signal: "風暴潮危險警報", period: "", probability: "" },    
  ]
};
