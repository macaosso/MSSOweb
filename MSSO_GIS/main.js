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

    let sourceList = type === "waterLevel" ? floodDataList : pointDataList;
    let stationPool = type === "waterLevel" ? waterStations : Object.entries(weatherStations).map(([name, info]) => ({ name, ...info }));

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

function fetchWeatherData() {
    const cacheBuster = Date.now();
    // Use working CORS proxy
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://xml.smg.gov.mo/c_actualweather.xml?t=${cacheBuster}`)}`;
    return fetch(url, { cache: "no-store" })
        .then(res => { if (!res.ok) throw new Error("Weather fail"); return res.text(); })
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
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://xml.smg.gov.mo/c_ftgms.xml?t=${cacheBuster}`)}`;
    return fetch(url, { cache: "no-store" })
        .then(res => { if (!res.ok) throw new Error("Flood fail"); return res.text(); })
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

function fetchTideData() {
    // Remove invalid APPCODE headers
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent("https://dsama.apigateway.data.gov.mo/currentTideXmlApi")}`;
    return fetch(url)
        .then(res => { if (!res.ok) throw new Error("Tide fail"); return res.text(); })
        .then(xmlStr => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlStr, "text/xml");
            const item = xmlDoc.querySelector("item");
            if (!item) { tideDataList = []; return; }
            const tideDate = item.querySelector("date").textContent;
            const tideTime = item.querySelector("time").textContent;
            const tideHeight = item.querySelector("recordTide").textContent;
            const fullTime = `${tideDate} ${tideTime}`;

            tideDataList = tideStations.map(sta => ({
                name: sta.name,
                code: sta.code,
                tideHeight: tideHeight,
                tideTime: fullTime
            }));

            document.getElementById("pub-date").textContent = fullTime;
            document.getElementById("time-stamp").textContent = fullTime;
        })
        .catch(err => {
            console.error("潮汐數據載入失敗：", err);
            tideDataList = [];
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
        .catch(err => console.error("整體數據載入失敗：", err));
}

function bindEvents() {
    // 刪除不存在的 .group-toggle 綁定
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

window.addEventListener('DOMContentLoaded', () => {
    initMap();
    bindEvents();
    loadAllData();
    setInterval(loadAllData, 300000);
});
