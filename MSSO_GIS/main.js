// Global variables
let map;
let allMarkers = [];
let currentTab = "tempCurrent";
let pointDataList = [];
let floodDataList = [];
let tableSortType = "default"; // default / desc / asc

const singleCardBox = document.getElementById("single-card-box");
const tableTitleWrap = document.querySelector(".table-title-wrap");
const tableBody = document.getElementById("table-body");

// ========== 測站基礎座標與代碼配置 ==========
const weatherStations = {
    /* 自行補全你真實測站名、經緯度、代碼 */
};
const waterStations = [
    /* 自行補全水位測站名、經緯度、代碼 */
];

// 表格欄位映射
const fieldMap = {
    tempCurrent: { field: "temp", label: "實時氣溫", unit: "°C" },
    tempMax: { field: "tempMax", label: "最高氣溫", unit: "°C" },
    tempMin: { field: "tempMin", label: "最低氣溫", unit: "°C" },
    humidity: { field: "humidity", label: "相對濕度", unit: "%" },
    dewPoint: { field: "dewPoint", label: "露點溫度", unit: "°C" },
    windDir: { field: "windDir", label: "風向", unit: "" },
    windSpeed: { field: "windSpeed", label: "風速", unit: "km/h" },
    windGust: { field: "windGust", label: "陣風", unit: "km/h" },
    pressSea: { field: "pressSea", label: "平均海平面氣壓", unit: "hPa" },
    pressStation: { field: "pressStation", label: "站氣壓", unit: "hPa" },
    apparentTemp: { field: "apparentTemp", label: "體感溫度", unit: "°C" },
    heatIndex: { field: "heatIndex", label: "酷熱指數", unit: "°C" },
    waterLevel: { field: "waterLevel", label: "實時水位", unit: "m" }
};

// ========== 工具函數 - 數值格式化 ==========
function formatVal(val, unit = "") {
    if (val === "" || val === null || val === undefined || val === "--") return "--";
    return val + (unit ? " " + unit : "");
}

// 提取XML節點值
function extractNodeValue(tagName, parent) {
    const node = parent.querySelector(tagName);
    return node ? node.textContent.trim() : "";
}

// ========== 氣象計算公式 ==========
// 體感溫度
function calculateApparentTemp(temp, rh, wind) {
    if (isNaN(temp) || isNaN(rh) || isNaN(wind)) return "--";
    let T = parseFloat(temp);
    let RH = parseFloat(rh);
    let WS = parseFloat(wind) / 3.6;
    if (WS < 1) WS = 1;
    let AT = T + 0.33 * RH / 100 * 6.105 * Math.exp(17.27 * T / (237.7 + T)) - 0.7 * WS - 4;
    return AT.toFixed(1);
}

// 酷熱指數
function calculateHeatIndex(temp, rh) {
    if (isNaN(temp) || isNaN(rh)) return "--";
    let T = parseFloat(temp);
    let RH = parseFloat(rh);
    if (T < 27) return T.toFixed(1);
    let HI = -8.784695 + 1.611399 * T + 2.338549 * RH - 0.146116 * T * RH
        - 0.012308 * T * T - 0.016425 * RH * RH
        + 0.00221173 * T * T * RH + 0.00072546 * T * RH * RH
        - 0.000003582 * T * T * RH * RH;
    return HI.toFixed(1);
}

// 露點溫度
function calculateDewPoint(temp, rh) {
    if (isNaN(temp) || isNaN(rh)) return "--";
    let T = parseFloat(temp);
    let RH = parseFloat(rh);
    let a = 17.27;
    let b = 237.7;
    let alpha = ((a * T) / (b + T)) + Math.log(RH / 100);
    let dew = (b * alpha) / (a - alpha);
    return dew.toFixed(1);
}

// ========== 顏色分級函數（地圖點位配色） ==========
function getTempColor(val) {
    let v = parseFloat(val);
    if (isNaN(v)) return "#999";
    if (v >= 38) return "#7b1818";
    if (v >= 34) return "#d64040";
    if (v >= 30) return "#ed7a7a";
    if (v >= 26) return "#e8b03e";
    if (v >= 22) return "#f0d390";
    if (v >= 16) return "#62e0b1";
    if (v >= 8) return "#64b5e7";
    return "#5c48a1";
}

function getHumidityColor(val) {
    let v = parseFloat(val);
    if (isNaN(v)) return "#999";
    if (v >= 85) return "#553C9A";
    if (v >= 70) return "#5DADEC";
    if (v >= 40) return "#6EE7B7";
    if (v >= 20) return "#E6B34B";
    return "#7b1818";
}

function getDewColor() {
    return "#62e0b1";
}

function getWindColor(val) {
    let v = parseFloat(val);
    if (isNaN(v)) return "#999";
    if (v >= 118) return "#d64040";
    if (v >= 89) return "#f2a938";
    if (v >= 62) return "#f9e559";
    if (v >= 39) return "#60c070";
    return "#64b5e7";
}

function getPressSeaColor(val) {
    let v = parseFloat(val);
    if (isNaN(v)) return "#999";
    if (v < 980) return "#d64040";
    if (v < 990) return "#e68938";
    if (v < 1000) return "#f9d342";
    return "#3a6ea5";
}

function getPressStationColor(val) {
    let v = parseFloat(val);
    if (isNaN(v)) return "#999";
    if (v < 965) return "#d64040";
    if (v < 975) return "#e68938";
    if (v < 985) return "#f9d342";
    return "#3a6ea5";
}

function getHeatIndexColor(val) {
    let v = parseFloat(val);
    if (isNaN(v)) return "#999";
    if (v >= 54.5) return "#d1b4f0";
    if (v >= 45.5) return "#f8c4c4";
    if (v >= 39.5) return "#ffe0c0";
    if (v >= 35.5) return "#ffffcc";
    return "#d8ffd8";
}

function getWaterLevelColor(val) {
    let v = parseFloat(val);
    if (isNaN(v)) return "#d1d1d1";
    if (v >= 2.50) return "#2d3436";
    if (v >= 1.50) return "#e17055";
    if (v >= 1.00) return "#fdcb6e";
    if (v >= 0.50) return "#ffeaa7";
    if (v >= 0.10) return "#74b9ff";
    if (v >= 0.01) return "#b8e994";
    return "#d1d1d1";
}

// 舊樣式Class（保留相容，現卡片已改用獨立布局）
function getHeatIndexClass(){return "";}
function getApparentClass(){return "";}
function getDewClass(){return "";}
function getRain1hClass(){return "";}
function getRainDayClass(){return "";}
function getWaterLevelClass(){return "";}

// ========== 地圖初始化 & 標點 ==========
function initMap() {
    map = L.map('macau-map').setView([22.17, 113.55], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
}

function clearMarkers() {
    allMarkers.forEach(marker => map.removeLayer(marker));
    allMarkers = [];
}

function updateMapMarkers() {
    clearMarkers();
    let sourceList, stationPool;

    if (currentTab === "waterLevel") {
        sourceList = floodDataList;
        stationPool = waterStations;
    } else {
        sourceList = pointDataList;
        stationPool = Object.entries(weatherStations).map(([name, info]) => ({ name, ...info }));
    }

    sourceList.forEach(point => {
        const name = point.name;
        const info = stationPool.find(s => s.name === name);
        if (!info) return;

        let showVal = "";
        let bgColor = "#3498db";
        let skipMarker = false;

        switch (currentTab) {
            case "tempCurrent": showVal = point.temp; bgColor = getTempColor(showVal); break;
            case "tempMax": showVal = point.tempMax; bgColor = getTempColor(showVal); break;
            case "tempMin": showVal = point.tempMin; bgColor = getTempColor(showVal); break;
            case "humidity": showVal = point.humidity; bgColor = getHumidityColor(showVal); break;
            case "dewPoint": showVal = point.dewPoint; bgColor = getDewColor(showVal); break;
            case "windDir": showVal = point.windDir || "--"; bgColor = "#9b59b6"; break;
            case "windSpeed": showVal = point.windSpeed; bgColor = getWindColor(showVal); break;
            case "windGust": showVal = point.windGust; bgColor = getWindColor(showVal); break;
            case "pressSea": showVal = point.pressSea; bgColor = getPressSeaColor(showVal); break;
            case "pressStation": showVal = point.pressStation; bgColor = getPressStationColor(showVal); break;
            case "apparentTemp": showVal = point.apparentTemp; bgColor = getTempColor(showVal); break;
            case "heatIndex":
                showVal = point.heatIndex;
                bgColor = getHeatIndexColor(showVal);
                const hiNum = parseFloat(showVal);
                if (isNaN(hiNum) || hiNum < 35.5) skipMarker = true;
                break;
            case "waterLevel":
                showVal = point.waterLevel;
                bgColor = getWaterLevelColor(showVal);
                break;
        }

        if (skipMarker || showVal === '' || showVal === '--') return;

        const iconHtml = `<div style="background:${bgColor};color:#fff;border-radius:50%;width:50px;height:50px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;">${showVal}</div>`;
        const icon = L.divIcon({ html: iconHtml, className: "", iconSize: [50, 50], iconAnchor: [25, 25] });
        const marker = L.marker([info.lat, info.lng], { icon }).addTo(map);
        marker.bindPopup(`<strong>${name} (${info.code})</strong>`);

        marker.on('click', () => renderSingleCard({ ...point, code: info.code }));
        allMarkers.push(marker);
    });
}

// ========== 新版 詳情卡片渲染（完全對應你指定布局） ==========
// ========== 新版 詳情卡片渲染（完全對應你指定布局） ==========
function renderSingleCard(data) {
    const {
        name, code,
        temp, tempMax, tempMin,
        heatIndex, apparentTemp,
        dewPoint, humidity,
        windDir, windSpeed, windGust,
        pressSea, pressStation,
        rain1m, rain1h, rainTotal,
        waterLevel
    } = data;

    const isWaterStation = typeof waterLevel !== "undefined" && (!temp || temp === "--");
    let html = `<div class="station-card"><div class="card-header">${name} (${code})</div>`;

    // 氣象站版面
    if (!isWaterStation) {
        // [氣溫] 最低 / 實時(大字) / 最高
        html += `
        <div class="section-title">[氣溫]</div>
        <div class="row-3">
            <div class="item">
                <div class="label">最低氣溫</div>
                <div class="side-val color-low">${formatVal(tempMin, '°C')}</div>
            </div>
            <div class="item">
                <div class="main-val">${formatVal(temp, '°C')}</div>
            </div>
            <div class="item">
                <div class="label">最高氣溫</div>
                <div class="side-val color-high">${formatVal(tempMax, '°C')}</div>
            </div>
        </div>`;

        // [人體感受與悶熱指標]
        html += `
        <div class="section-title">[人體感受與悶熱指標]</div>
        <div class="row-2">
            <div class="data-item">
                <div class="label">酷熱指數</div>
                <div class="value">${formatVal(heatIndex, '°C')}</div>
            </div>
            <div class="data-item">
                <div class="label">體感溫度</div>
                <div class="value">${formatVal(apparentTemp, '°C')}</div>
            </div>
        </div>`;

        // [空氣中水分含量]
        html += `
        <div class="section-title">[空氣中水分含量]</div>
        <div class="row-2">
            <div class="data-item">
                <div class="label">露點溫度</div>
                <div class="value">${formatVal(dewPoint, '°C')}</div>
            </div>
            <div class="data-item">
                <div class="label">相對濕度</div>
                <div class="value">${formatVal(humidity, '%')}</div>
            </div>
        </div>`;

        // [風力]
        html += `
        <div class="section-title">[風力]</div>
        <div class="row-3-col">
            <div class="data-item">
                <div class="label">風向</div>
                <div class="value">${windDir || '--'}</div>
            </div>
            <div class="data-item">
                <div class="label">風速</div>
                <div class="value">${formatVal(windSpeed, 'km/h')}</div>
            </div>
            <div class="data-item">
                <div class="label">陣風</div>
                <div class="value">${formatVal(windGust, 'km/h')}</div>
            </div>
        </div>`;

        // [氣壓] 無數據則隱藏整區
        if ((pressSea && pressSea !== "--") || (pressStation && pressStation !== "--")) {
            html += `<div class="section-title">[氣壓]</div><div class="row-2">`;
            if (pressSea && pressSea !== "--") {
                html += `
                <div class="data-item">
                    <div class="label">平均海平面氣壓</div>
                    <div class="value">${formatVal(pressSea, 'hPa')}</div>
                </div>`;
            }
            if (pressStation && pressStation !== "--") {
                html += `
                <div class="data-item">
                    <div class="label">站氣壓</div>
                    <div class="value">${formatVal(pressStation, 'hPa')}</div>
                </div>`;
            }
            html += `</div>`;
        }

        // [雨量] 無數據則隱藏整區
        if ((rain1m && rain1m !== "--") || (rain1h && rain1h !== "--") || (rainTotal && rainTotal !== "--")) {
            html += `<div class="section-title">[雨量]</div><div class="row-3-col">`;
            if (rain1m && rain1m !== "--") {
                html += `
                <div class="data-item">
                    <div class="label">一分鐘雨量</div>
                    <div class="value">${formatVal(rain1m, 'mm')}</div>
                </div>`;
            }
            if (rain1h && rain1h !== "--") {
                html += `
                <div class="data-item">
                    <div class="label">一小時雨量</div>
                    <div class="value">${formatVal(rain1h, 'mm')}</div>
                </div>`;
            }
            if (rainTotal && rainTotal !== "--") {
                html += `
                <div class="data-item">
                    <div class="label">每日總雨量</div>
                    <div class="value">${formatVal(rainTotal, 'mm')}</div>
                </div>`;
            }
            html += `</div>`;
        }
    }

    // 水位站：只顯示 實時水位 + 對應圖例配色
    if (waterLevel && waterLevel !== "--") {
        let wlColor = "#d1d1d1";
        let wlBorder = "#cccccc";
        const wl = parseFloat(waterLevel);

        if (wl >= 2.50) {
            wlColor = "#2d3436";
            wlBorder = "#000000";
        } else if (wl >= 1.50) {
            wlColor = "#e17055";
            wlBorder = "#d63031";
        } else if (wl >= 1.00) {
            wlColor = "#fdcb6e";
            wlBorder = "#f39c12";
        } else if (wl >= 0.50) {
            wlColor = "#ffeaa7";
            wlBorder = "#fdcb6e";
        } else if (wl >= 0.10) {
            wlColor = "#74b9ff";
            wlBorder = "#0984e3";
        } else if (wl >= 0.01) {
            wlColor = "#b8e994";
            wlBorder = "#00b894";
        }

        const textColor = wlColor === "#2d3436" ? "#ffffff" : "#2c3e50";
        html += `
        <div class="section-title">[水位]</div>
        <div class="water-item" style="background:${wlColor}26; border-color:${wlBorder};">
            <div class="label">實時水位</div>
            <div class="value" style="color:${textColor};">${formatVal(waterLevel, 'm')}</div>
        </div>`;
    }

    html += `</div>`;
    singleCardBox.innerHTML = html;
}

// ========== 圖例更新 ==========
function updateLegendPanel(tabType) {
    const legendContent = document.getElementById('legend-content');
    let legendHTML = '';
    switch (tabType) {
        case "tempCurrent":
        case "tempMax":
        case "tempMin":
        case "apparentTemp":
            legendHTML = `
                <div class="legend-item"><div class="legend-color" style="background:#7b1818"></div>非常酷熱</div>
                <div class="legend-item"><div class="legend-color" style="background:#d64040"></div>酷熱</div>
                <div class="legend-item"><div class="legend-color" style="background:#ed7a7a"></div>炎熱</div>
                <div class="legend-item"><div class="legend-color" style="background:#e8b03e"></div>溫暖</div>
                <div class="legend-item"><div class="legend-color" style="background:#f0d390"></div>和暖</div>
                <div class="legend-item"><div class="legend-color" style="background:#62e0b1"></div>清涼</div>
                <div class="legend-item"><div class="legend-color" style="background:#64b5e7"></div>寒冷</div>
                <div class="legend-item"><div class="legend-color" style="background:#5c48a1"></div>非常寒冷</div>`;
            break;
        case "heatIndex":
            legendHTML = `
                <div class="legend-item"><div class="legend-color" style="background:#d1b4f0"></div>≥54.5℃ 極度危險</div>
                <div class="legend-item"><div class="legend-color" style="background:#f8c4c4"></div>45.5~54.4℃ 危險</div>
                <div class="legend-item"><div class="legend-color" style="background:#ffe0c0"></div>39.5~45.4℃ 特別注意</div>
                <div class="legend-item"><div class="legend-color" style="background:#ffffcc"></div>35.5~39.4℃ 注意</div>
                <div class="legend-item"><div class="legend-color" style="background:#d8ffd8"></div>&lt;35.5℃ 正常</div>`;
            break;
        case "humidity":
            legendHTML = `
                <div class="legend-item"><div class="legend-color" style="background:#553C9A"></div>非常潮濕</div>
                <div class="legend-item"><div class="legend-color" style="background:#5DADEC"></div>潮濕</div>
                <div class="legend-item"><div class="legend-color" style="background:#6EE7B7"></div>正常</div>
                <div class="legend-item"><div class="legend-color" style="background:#E6B34B"></div>乾燥</div>
                <div class="legend-item"><div class="legend-color" style="background:#7b1818"></div>非常乾燥</div>`;
            break;
        case "windSpeed":
        case "windGust":
            legendHTML = `
                <div class="legend-item"><div class="legend-color" style="background:#d64040"></div>颶風</div>
                <div class="legend-item"><div class="legend-color" style="background:#f2a938"></div>暴風</div>
                <div class="legend-item"><div class="legend-color" style="background:#f9e559"></div>烈風</div>
                <div class="legend-item"><div class="legend-color" style="background:#60c070"></div>強風</div>
                <div class="legend-item"><div class="legend-color" style="background:#64b5e7"></div>強風以下</div>`;
            break;
        case "pressSea":
            legendHTML = `
                <div class="legend-item"><div class="legend-color" style="background:#d64040"></div>&lt;980hPa</div>
                <div class="legend-item"><div class="legend-color" style="background:#e68938"></div>980~989hPa</div>
                <div class="legend-item"><div class="legend-color" style="background:#f9d342"></div>990~999hPa</div>
                <div class="legend-item"><div class="legend-color" style="background:#3a6ea5"></div>≥1000hPa</div>`;
            break;
        case "pressStation":
            legendHTML = `
                <div class="legend-item"><div class="legend-color" style="background:#d64040"></div>&lt;965hPa</div>
                <div class="legend-item"><div class="legend-color" style="background:#e68938"></div>965~974hPa</div>
                <div class="legend-item"><div class="legend-color" style="background:#f9d342"></div>975~984hPa</div>
                <div class="legend-item"><div class="legend-color" style="background:#3a6ea5"></div>≥985hPa</div>`;
            break;
        case "waterLevel":
            legendHTML = `
                <div class="legend-item"><div class="legend-color" style="background:#d1d1d1"></div>0.00 m (無水位)</div>
                <div class="legend-item"><div class="legend-color" style="background:#b8e994"></div>0.01 - 0.09 m</div>
                <div class="legend-item"><div class="legend-color" style="background:#74b9ff"></div>0.10 - 0.49 m</div>
                <div class="legend-item"><div class="legend-color" style="background:#ffeaa7"></div>0.50 - 0.99 m</div>
                <div class="legend-item"><div class="legend-color" style="background:#fdcb6e"></div>1.00 - 1.49 m</div>
                <div class="legend-item"><div class="legend-color" style="background:#e17055"></div>1.50 - 2.49 m</div>
                <div class="legend-item"><div class="legend-color" style="background:#2d3436"></div>≥ 2.50 m</div>`;
            break;
        case "windDir":
        case "dewPoint":
            legendHTML = `<div class="legend-item" style="color:#777;">無圖例</div>`;
            break;
        default:
            legendHTML = `<div class="legend-item" style="color:#777;">無圖例</div>`;
    }
    legendContent.innerHTML = legendHTML;
}

// ========== 數據表格渲染 & 排序 ==========
function renderDataTable(type) {
    const cfg = fieldMap[type];
    const field = cfg.field;
    const label = cfg.label;
    const unit = cfg.unit;
    document.getElementById('table-title').textContent = `${label} 數據表格`;
    tableBody.innerHTML = "";

    let sourceList = type === "waterLevel" ? floodDataList : pointDataList;
    let stationPool = type === "waterLevel"
        ? waterStations
        : Object.entries(weatherStations).map(([name, info]) => ({ name, ...info }));

    // 排序
    if (tableSortType !== "default") {
        sourceList = [...sourceList].sort((a, b) => {
            const valA = parseFloat(a[field]) || 0;
            const valB = parseFloat(b[field]) || 0;
            return tableSortType === "desc" ? valB - valA : valA - valB;
        });
    }

    sourceList.forEach(item => {
        const val = item[field];
        if (val === '--' || val === '') return;

        const name = item.name;
        const station = stationPool.find(s => s.name === name);
        const code = station ? station.code : "";
        const displayVal = val + (unit ? " " + unit : "");

        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${name}</td><td>${code}</td><td>${displayVal}</td>`;
        tableBody.appendChild(tr);
    });
}

// ========== 數據請求 ==========
function fetchWeatherData() {
    const cacheBuster = Date.now();
    const url = `https://corsproxy.io/?https://xml.smg.gov.mo/c_actualweather.xml?t=${cacheBuster}`;
    return fetch(url, { cache: "no-store" })
        .then(res => {
            if (!res.ok) throw new Error("Weather fetch fail");
            return res.text();
        })
        .then(xmlStr => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlStr, "text/xml");
            const pubTime = xmlDoc.querySelector("SysPubdate")?.textContent || "未知";
            document.getElementById("pub-date").textContent = pubTime;
            document.getElementById("time-stamp").textContent = pubTime;

            const stations = xmlDoc.querySelectorAll("WeatherReport station");
            pointDataList = [];
            singleCardBox.innerHTML = '<div class="empty-tip">請點擊地圖上圓圈查看測站數據</div>';

            stations.forEach(station => {
                const name = station.querySelector("stationname")?.textContent || "";
                const temp = extractNodeValue("Temperature", station);
                const tempMax = extractNodeValue("Temperature_daily_max", station);
                const tempMin = extractNodeValue("Temperature_daily_min", station);
                const humidity = extractNodeValue("Humidity", station);
                const windSpeed = extractNodeValue("WindSpeed", station);
                const windGust = extractNodeValue("WindGust", station);
                const pressSea = extractNodeValue("MeanSeaLevelPressure", station);
                const pressStation = extractNodeValue("StationPressure", station);
                const windDirNode = station.querySelector("WindDirection");
                const windDir = windDirNode?.querySelector("dValue")?.textContent || "";

                let rain1m = "", rain1h = "", rainTotal = "";
                station.querySelectorAll("Rainfall").forEach(r => {
                    const type = r.querySelector("Type")?.textContent;
                    const val = r.querySelector("dValue")?.textContent || "";
                    if (type === "3") rain1m = val;
                    if (type === "4") rain1h = val;
                    if (type === "5") rainTotal = val;
                });

                const T = parseFloat(temp);
                const RH = parseFloat(humidity);
                const windSpeedKmH = parseFloat(windSpeed);
                const apparentTemp = calculateApparentTemp(T, RH, windSpeedKmH);
                const heatIndex = calculateHeatIndex(T, RH);
                const dewPoint = calculateDewPoint(T, RH);

                pointDataList.push({
                    name, temp, tempMax, tempMin, humidity, windDir,
                    windSpeed, windGust, rain1m, rain1h, rainTotal,
                    pressSea, pressStation, apparentTemp, heatIndex, dewPoint,
                    waterLevel: "--"
                });
            });
        });
}

function fetchFloodData() {
    const cacheBuster = Date.now();
    const url = `https://corsproxy.io/?https://xml.smg.gov.mo/c_ftgms.xml?t=${cacheBuster}`;
    return fetch(url, { cache: "no-store" })
        .then(res => {
            if (!res.ok) throw new Error("Flood fetch fail");
            return res.text();
        })
        .then(xmlStr => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlStr, "text/xml");
            const stations = xmlDoc.querySelectorAll("WLReport station") || xmlDoc.querySelectorAll("station");
            floodDataList = [];

            stations.forEach(station => {
                const name = station.querySelector("stationname")?.textContent || "未知監測點";
                let waterLevel = "--";
                const wlNode = station.querySelector("WaterLevel") || station.querySelector("Value") || station.querySelector("dValue");
                if (wlNode) waterLevel = wlNode.textContent.trim();
                if (!waterLevel || waterLevel === "") waterLevel = "--";

                floodDataList.push({ name, waterLevel });
            });
        })
        .catch(err => console.error("水位數據載入失敗：", err));
}

function loadAllData() {
    Promise.all([fetchWeatherData(), fetchFloodData()])
        .then(() => {
            updateMapMarkers();
            updateLegendPanel(currentTab);
            renderDataTable(currentTab);
        })
        .catch(err => console.error("整體數據載入失敗：", err));
}

// ========== 事件綁定 ==========
function bindEvents() {
    document.querySelectorAll('.group-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => toggle.nextElementSibling.classList.toggle('show'));
    });

    // 分類標籤切換
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.type;
            tableSortType = "default";
            updateMapMarkers();
            updateLegendPanel(currentTab);
            renderDataTable(currentTab);
        });
    });

    // 地圖 / 表格 視圖切換
    document.getElementById('btn-map').addEventListener('click', function () {
        this.classList.add('active');
        document.getElementById('btn-table').classList.remove('active');
        document.getElementById('map-view').classList.remove('hide');
        document.getElementById('table-view').classList.add('hide');
    });
    document.getElementById('btn-table').addEventListener('click', function () {
        this.classList.add('active');
        document.getElementById('btn-map').classList.remove('active');
        document.getElementById('map-view').classList.add('hide');
        document.getElementById('table-view').classList.remove('hide');
        renderDataTable(currentTab);
    });

    // 表格排序按鈕
    document.getElementById('sort-default').addEventListener('click', () => {
        tableSortType = "default";
        renderDataTable(currentTab);
    });
    document.getElementById('sort-desc').addEventListener('click', () => {
        tableSortType = "desc";
        renderDataTable(currentTab);
    });
    document.getElementById('sort-asc').addEventListener('click', () => {
        tableSortType = "asc";
        renderDataTable(currentTab);
    });
}

// ========== 頁面入口 ==========
window.addEventListener('DOMContentLoaded', () => {
    initMap();
    bindEvents();
    loadAllData();
    setInterval(loadAllData, 300000); // 5分鐘自動刷新
});
