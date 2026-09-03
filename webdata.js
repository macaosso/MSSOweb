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
  `「沙德爾」已減弱為低壓區。預計「沙德爾」殘餘雲雨帶仍會靠近珠江口一帶，受其影響，本澳今日多雲及有一兩陣驟雨。`
];

const tcWarnings = [
  {
    icon: "",
    text: "戒備警報於本地時間09月04日00時20分取消。"
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
    text: "酷熱警報於本地時間09月03日18時45分取消。"
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
  updateTimeText: "2026-09-02  14:20 MST 更新",
  tableRows: [
    { signal: "注意警報", period: "", probability: "" },
    { signal: "戒備警報", period: "09月02日 14時20分", probability: "" },
    { signal: "強風警報", period: "09月04日 日間", probability: "" },
    { signal: "烈風警報", period: "09月01日", probability: "" },
    { signal: "暴風警報", period: "", probability: "" },
    { signal: "颶風警報", period: "", probability: "" },
    { signal: "風暴潮觀察警報", period: "", probability: "" },
    { signal: "風暴潮戒備警報", period: "", probability: "" },
    { signal: "風暴潮危險警報", period: "", probability: "" },    
  ]
};
