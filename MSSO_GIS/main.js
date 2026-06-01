// Global variables
let map;
let allMarkers = [];
let currentTab = "tempCurrent";
let pointDataList = [];
let floodDataList = [];
let tideDataList = [];
let tableSortType = "default";

// 潮汐接口與測站
const TIDE_API = "https://corsproxy.io/?https://dsama.apigateway.data.gov.mo/currentTideXmlApi";
const TIDE_HEADERS = { "Authorization": "APPCODE 09d43a591fba407fb862412970667de4" };
const tideStations = [
    { name: "媽閣", code: "SBR", lat: 22.186720, lng: 113.530000 },
    { name: "青洲塘", code: "SDV", lat: 22.208934, lng: 113.539580 }
];

const singleCardBox = document.getElementById("single-card-box");
const tableBody = document.getElementById("table-body");

// Init Map (只執行一次)
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
    } else if (currentTab === "tide") {
        sourceList = tideDataList;
        stationPool = tideStations;
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
            case "tide":
                showVal = point.tideHeight;
                bgColor = "#16a085";
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

function renderSingleCard(data) {
    const { name, code, temp, tempMax, tempMin, humidity, windDir, windSpeed, windGust, rain1m, rain1h, rainTotal,
        pressSea, pressStation, apparentTemp, heatIndex, dewPoint, waterLevel, tideHeight, tideTime } = data;
    const fullName = `${name} (${code})`;

    if (currentTab === "tide") {
        singleCardBox.innerHTML = `
        <div class="station-card">
            <div class="station-name">${fullName}</div>
            <div style="text-align:center;margin:30px 0;">
                <div style="font-size:2.2rem;font-weight:bold;color:#16a085;">${tideHeight} cm</div>
                <div style="margin-top:8px;color:#666;">觀測時間：${tideTime}</div>
            </div>
        </div>`;
        return;
    }

    const hiClass = getHeatIndexClass(heatIndex);
    const apClass = getApparentClass(apparentTemp);
    const dewClass = getDewClass(dewPoint);
    const r1mClass = getRain1hClass(rain1m);
    const r1hClass = getRain1hClass(rain1h);
    const rTotalClass = getRainDayClass(rainTotal);
    const wlClass = getWaterLevelClass(waterLevel);

    let wlHtml = "";
    if (currentTab === "waterLevel") {
        wlHtml = `<div class="${wlClass}" style="grid-column: span 6;"><span>實時水位</span><strong>${formatVal(waterLevel, 'm')}</strong></div>`;
    }

    singleCardBox.innerHTML = `
    <div class="station-card">
        <div class="station-name">${fullName}</div>
        <div class="temp-row">
            <div class="current-temp">${formatVal(temp, '°C')}</div>
            <div class="temp-range">
                <div>最高: <span class="high-temp">${formatVal(tempMax, '°C')}</span></div>
                <div>最低: <span class="low-temp">${formatVal(tempMin, '°C')}</span></div>
            </div>
        </div>
        <div class="metrics-grid">
            <div class="${hiClass}"><span>酷熱指數</span><strong>${formatVal(heatIndex, '°C')}</strong></div>
            <div class="${apClass}"><span>體感溫度</span><strong>${formatVal(apparentTemp, '°C')}</strong></div>
            <div class="${dewClass}"><span>露點溫度</span><strong>${formatVal(dewPoint, '°C')}</strong></div>
            <div class="metric col-half"><span>相對濕度</span><strong>${formatVal(humidity, '%')}</strong></div>
            <div class="metric col-half"><span>風向</span><strong>${windDir || '--'}</strong></div>
            <div class="metric col-half"><span>風速</span><strong>${formatVal(windSpeed, 'km/h')}</strong></div>
            <div class="metric col-half"><span>陣風</span><strong>${formatVal(windGust, 'km/h')}</strong></div>
            <div class="metric col-half"><span>平均海平面氣壓</span><strong>${formatVal(pressSea, 'hPa')}</strong></div>
            <div class="metric col-half"><span>站氣壓</span><strong>${formatVal(pressStation, 'hPa')}</strong></div>
            <div class="${r1mClass}"><span>一分鐘雨量</span><strong>${formatVal(rain1m, 'mm')}</strong></div>
            <div class="${r1hClass}"><span>一小時雨量</span><strong>${formatVal(rain1h, 'mm')}</strong></div>
            <div class="${rTotalClass}"><span>日總雨量</span><strong>${formatVal(rainTotal, 'mm')}</strong></div>
            ${wlHtml}
        </div>
    </div>`;
}

function updateLegendPanel(tabType) {
    const legendContent = document.getElementById('legend-content');
    let legendHTML = '';
    switch (tabType) {
        case "tempCurrent": case "tempMax": case "tempMin": case "apparentTemp":
            legendHTML = `<div class="legend-item"><div class="legend-color" style="background:#7b1818"></div>非常酷熱</div><div class="legend-item"><div class="legend-color" style="background:#d64040"></div>酷熱</div><div class="legend-item"><div class="legend-color" style="background:#ed7a7a"></div>炎熱</div><div class="legend-item"><div class="legend-color" style="background:#e8b03e"></div>溫暖</div><div class="legend-item"><div class="legend-color" style="background:#f0d390"></div>和暖</div><div class="legend-item"><div class="legend-color" style="background:#62e0b1"></div>清涼</div><div class="legend-item"><div class="legend-color" style="background:#64b5e7"></div>寒冷</div><div class="legend-item"><div class="legend-color" style="background:#5c48a1"></div>非常寒冷</div>`;
            break;
        case "heatIndex":
            legendHTML = `<div class="legend-item"><div class="legend-color" style="background:#900C3F"></div>≥45.0℃ 危險</div><div class="legend-item"><div class="legend-color" style="background:#C70039"></div>40.0~44.9℃ 極酷熱</div><div class="legend-item"><div class="legend-color" style="background:#FF5733"></div>35.5~39.9℃ 酷熱</div><div class="legend-item" style="color:#777;">低於35.5℃ 不顯示</div>`;
            break;
        case "dewPoint":
            legendHTML = `<div class="legend-item"><div class="legend-color" style="background:#2980b9"></div>≥28℃ 高露點</div><div class="legend-item"><div class="legend-color" style="background:#64b5e7"></div>24~27.9℃</div><div class="legend-item"><div class="legend-color" style="background:#62e0b1"></div>18~23.9℃</div><div class="legend-item"><div class="legend-color" style="background:#bdd7ee"></div><18℃</div>`;
            break;
        case "humidity":
            legendHTML = `<div class="legend-item"><div class="legend-color" style="background:#553C9A"></div>非常潮濕</div><div class="legend-item"><div class="legend-color" style="background:#5DADEC"></div>潮濕</div><div class="legend-item"><div class="legend-color" style="background:#6EE7B7"></div>正常</div><div class="legend-item"><div class="legend-color" style="background:#E6B34B"></div>乾燥</div><div class="legend-item"><div class="legend-color" style="background:#7b1818"></div>非常乾燥</div>`;
            break;
        case "windDir":
            legendHTML = `<div class="legend-item"><div class="legend-color" style="background:#9b59b6"></div>風向數據</div>`;
            break;
        case "windSpeed": case "windGust":
            legendHTML = `<div class="legend-item"><div class="legend-color" style="background:#d64040"></div>颶風</div><div class="legend-item"><div class="legend-color" style="background:#f2a938"></div>暴風</div><div class="legend-item"><div class="legend-color" style="background:#f9e559"></div>烈風</div><div class="legend-item"><div class="legend-color" style="background:#60c070"></div>強風</div><div class="legend-item"><div class="legend-color" style="background:#64b5e7"></div>強風以下</div>`;
            break;
        case "pressSea":
            legendHTML = `<div class="legend-item"><div class="legend-color" style="background:#d64040"></div><980hPa</div><div class="legend-item"><div class="legend-color" style="background:#e68938"></div>980~989hPa</div><div class="legend-item"><div class="legend-color" style="background:#f9d342"></div>990~999hPa</div><div class="legend-item"><div class="legend-color" style="background:#3a6ea5"></div>≥1000hPa</div>`;
            break;
        case "pressStation":
            legendHTML = `<div class="legend-item"><div class="legend-color" style="background:#d64040"></div><965hPa</div><div class="legend-item"><div class="legend-color" style="background:#e68938"></div>965~974hPa</div><div class="legend-item"><div class="legend-color" style="background:#f9d342"></div>975~984hPa</div><div class="legend-item"><div class="legend-color" style="background:#3a6ea5"></div>≥985hPa</div>`;
            break;
        case "waterLevel":
            legendHTML = `<div class="legend-item"><div class="legend-color" style="background:#3498db"></div>無積水 (0m)</div><div class="legend-item"><div class="legend-color" style="background:#f1c40f"></div>輕微積水 0~0.2m</div><div class="legend-item"><div class="legend-color" style="background:#f39c12"></div>中度積水 0.2~0.5m</div><div class="legend-item"><div class="legend-color" style="background:#e74c3c"></div>嚴重積水 >0.5m</div>`;
            break;
        case "tide":
            legendHTML = `<div class="legend-item"><div class="legend-color" style="background:#16a085"></div>潮汐監測站</div>`;
            break;
        default:
            legendHTML = `<div class="legend-item" style="color:#777;">無圖例</div>`;
    }
    legendContent.innerHTML = legendHTML;
}

function renderDataTable(type) {
    if (type === "tide") {
        document.getElementById('table-title').textContent = `實時潮汐 數據表格`;
        tableBody.innerHTML = "";
        tideDataList.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${item.name}</td><td>${item.code}</td><td>${item.tideHeight} cm</td>`;
            tableBody.appendChild(tr);
        });
        return;
    }

    const cfg = fieldMap[type];
    const field = cfg.field;
    const label = cfg.label;
    const unit = cfg.unit;
    document.getElementById('table-title').textContent = `${label} 數據表格`;
    tableBody.innerHTML = "";

    let sourceList, stationList;
    if (type === "waterLevel") {
        sourceList = floodDataList;
        stationList = waterStations;
    } else {
        sourceList = pointDataList;
        stationList = Object.entries(weatherStations).map(([name, info]) => ({ name, ...info }));
    }

    // 排序處理
    let tempList = [...sourceList];
    if (tableSortType !== "default") {
        tempList.sort((a, b) => {
            let valA = parseFloat(a[field]) || 0;
            let valB = parseFloat(b[field]) || 0;
            return tableSortType === "desc" ? valB - valA : valA - valB;
        });
    }

    tempList.forEach(item => {
        const val = item[field];
        if (val === '--' || val === '') return;

        const station = stationList.find(s => s.name === item.name);
        const code = station ? station.code : "";
        const showVal = unit ? `${val} ${unit}` : val;

        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.name}</td><td>${code}</td><td>${showVal}</td>`;
        tableBody.appendChild(tr);
    });
}

function fetchWeatherData() {
    const cacheStamp = Date.now();
    const url = `https://corsproxy.io/?https://xml.smg.gov.mo/c_actualweather.xml?t=${cacheStamp}`;
    return fetch(url, { cache: "no-store" })
        .then(res => {
            if (!res.ok) throw new Error("氣象資料請求失敗");
            return res.text();
        })
        .then(xmlStr => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlStr, "text/xml");
            const pubTime = xmlDoc.querySelector("SysPubTime")?.textContent || "未知時間";
            document.getElementById("pub-date").textContent = pubTime;
            document.getElementById("time-stamp").textContent = pubTime;

            const stationNodes = xmlDoc.querySelectorAll("WeatherReport > Station");
            pointDataList = [];
            stationNodes.forEach(sta => {
                const name = sta.querySelector("StationName")?.textContent?.trim() || "";
                if (!name) return;

                const temp = extractNodeValue("Temperature", sta);
                const tempMax = extractNodeValue("Temperature_Daily_Max", sta);
                const tempMin = extractNodeValue("Temperature_Daily_Min", sta);
                const humidity = extractNodeValue("Humidity", sta);
                const windSpeed = extractNodeValue("WindSpeed", sta);
                const windGust = extractNodeValue("WindGust", sta);
                const pressSea = extractNodeValue("MeanSeaLevelPressure", sta);
                const pressStation = extractNodeValue("StationPressure", sta);
                const windDirNode = sta.querySelector("WindDirection");
                const windDir = windDirNode ? (windDirNode.querySelector("dValue")?.textContent || "") : "";

                let rain1m = "--", rain1h = "--", rainTotal = "--";
                sta.querySelectorAll("Rainfall").forEach(rf => {
                    const type = rf.querySelector("Type")?.textContent;
                    const val = rf.querySelector("dValue")?.textContent || "";
                    if (type === "3") rain1m = val;
                    if (type === "4") rain1h = val;
                    if (type === "5") rainTotal = val;
                });

                const T = parseFloat(temp);
                const RH = parseFloat(humidity);
                const WS = parseFloat(windSpeed);
                const apparentTemp = calculateApparentTemp(T, RH, WS);
                const heatIndex = calculateHeatIndex(T, RH);
                const dewPoint = calculateDewPoint(T, RH);

                pointDataList.push({
                    name, temp, tempMax, tempMin, humidity, windDir,
                    windSpeed, windGust, pressSea, pressStation,
                    rain1m, rain1h, rainTotal, apparentTemp, heatIndex, dewPoint,
                    waterLevel: "--"
                });
            });
        });
}

function fetchFloodData() {
    const cacheStamp = Date.now();
    const url = `https://corsproxy.io/?https://xml.smg.gov.mo/c_flood.xml?t=${cacheStamp}`;
    return fetch(url, { cache: "no-store" })
        .then(res => {
            if (!res.ok) throw new Error("水位資料請求失敗");
            return res.text();
        })
        .then(xmlStr => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlStr, "text/xml");
            const stationNodes = xmlDoc.querySelectorAll("WLReport > Station");
            floodDataList = [];
            stationNodes.forEach(sta => {
                const name = sta.querySelector("StationName")?.textContent?.trim() || "";
                if (!name) return;
                const waterLevel = extractNodeValue("WaterLevel", sta);
                floodDataList.push({ name, waterLevel });
            });
        });
}

function fetchTideData() {
    const cacheStamp = Date.now();
    const url = `${TIDE_API}?t=${cacheStamp}`;
    return fetch(url, {
        method: "GET",
        headers: TIDE_HEADERS,
        cache: "no-store"
    })
    .then(res => {
        if (!res.ok) throw new Error("潮汐資料請求失敗");
        return res.text();
    })
    .then(xmlStr => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlStr, "text/xml");
        const itemNodes = xmlDoc.querySelectorAll("CurrentTide > Item");
        tideDataList = [];
        itemNodes.forEach(item => {
            const name = item.querySelector("StationName")?.textContent?.trim() || "";
            const tideHeight = item.querySelector("TideHeight")?.textContent?.trim() || "--";
            const tideTime = item.querySelector("ObsTime")?.textContent?.trim() || "--";
            tideDataList.push({ name, tideHeight, tideTime });
        });
    });
}

function loadAllData() {
    Promise.all([fetchWeatherData(), fetchFloodData(), fetchTideData()])
        .then(() => {
            updateMapMarkers();
            updateLegendPanel(currentTab);
            renderDataTable(currentTab);
            singleCardBox.innerHTML = '<div class="empty-tip">請點擊地圖上圓圈查看測站數據</div>';
        })
        .catch(err => {
            console.error("資料載入異常：", err);
        });
}

function bindEvents() {
    // 分類標籤按鈕
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.type;
            tableSortType = "default";
            updateMapMarkers();
            updateLegendPanel(currentTab);
            renderDataTable(currentTab);
            singleCardBox.innerHTML = '<div class="empty-tip">請點擊地圖上圓圈查看測站數據</div>';
        });
    });

    // 視圖切換：地圖 / 表格
    const btnMap = document.getElementById("btn-map");
    const btnTable = document.getElementById("btn-table");
    const mapView = document.getElementById("map-view");
    const tableView = document.getElementById("table-view");

    btnMap.addEventListener("click", () => {
        btnMap.classList.add("active");
        btnTable.classList.remove("active");
        mapView.classList.remove("hide");
        tableView.classList.add("hide");
    });

    btnTable.addEventListener("click", () => {
        btnTable.classList.add("active");
        btnMap.classList.remove("active");
        mapView.classList.add("hide");
        tableView.classList.remove("hide");
    });

    // 表格排序按鈕
    document.getElementById("sort-default").addEventListener("click", () => {
        tableSortType = "default";
        renderDataTable(currentTab);
    });
    document.getElementById("sort-desc").addEventListener("click", () => {
        tableSortType = "desc";
        renderDataTable(currentTab);
    });
    document.getElementById("sort-asc").addEventListener("click", () => {
        tableSortType = "asc";
        renderDataTable(currentTab);
    });
}

// 頁面載入完成初始化
window.addEventListener('DOMContentLoaded', () => {
    initMap();
    bindEvents();
    loadAllData();
    // 5分鐘自動重新整理資料
    setInterval(loadAllData, 300000);
});
