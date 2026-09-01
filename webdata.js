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
  `   強風警報於本地時間09月01日13時20分發出。表示受熱帶氣旋影響，預料澳門平均風速為每小時41至62公里，陣風約為每小時63至87公里，橋上或空曠地方風力可能更大。

下午1時，熱帶低氣壓「沙德爾」集結在本澳東南偏南約260公里，即在北緯19.9度，東經114.2度附近，其中心附近最高持續風速約為每小時55公里，向東北偏東移動，時速約18公里，橫過南海北部。 

按照現時預測路徑，預料「沙德爾」會向東北偏東方向移動，今日在本澳東南偏南250公里左右掠過。

本地風力正有所增強，同時其外圍雨帶正影響珠江口以東，正影響本澳，受其影響下，部份地方風力間中達強風程度，陣風達烈風程度。預計本澳吹東北風，風力今日稍後會繼續增強，強風警報將會在今日黃昏前維持。

市民應完成適當的預防措施，留意未來數日天氣資訊。`
];

const tcWarnings = [
  {
    icon: "t2",
    text: "強風警報於本地時間09月01日13時20分發出。"
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
    { signal: "戒備警報", period: "", probability: "" },
    { signal: "強風警報", period: "09月01日日間", probability: "現正生效" },
    { signal: "烈風警報", period: "09月01日", probability: "低" },
    { signal: "暴風警報", period: "", probability: "" },
    { signal: "颶風警報", period: "", probability: "" },
    { signal: "風暴潮觀察警報", period: "", probability: "偏低" },
    { signal: "風暴潮戒備警報", period: "", probability: "" },
    { signal: "風暴潮危險警報", period: "", probability: "" },    
  ]
};
