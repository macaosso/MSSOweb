// 1. Meteorology calculation
function calculateApparentTemp(T, RH, windSpeedKmH) {
    const V = windSpeedKmH / 3.6;
    const e = (RH / 100) * 6.105 * Math.exp((17.27 * T) / (237.7 + T));
    const apparentTemp = 1.04 * T + 0.2 * e - 0.65 * V - 2.7;
    return isNaN(apparentTemp) ? '--' : apparentTemp.toFixed(1);
}

function calculateHeatIndex(T, RH) {
    if (isNaN(T) || isNaN(RH)) return '--';
    let hi = -8.7846947556 + 1.61139411 * T + 2.3385488388 * RH
        - 0.14611605 * T * RH - 0.012308094 * Math.pow(T, 2)
        - 0.0164248278 * Math.pow(RH, 2)
        + 0.002211732 * Math.pow(T, 2) * RH
        + 0.00072546 * T * Math.pow(RH, 2)
        - 0.000003582 * Math.pow(T, 2) * Math.pow(RH, 2);
    return hi.toFixed(1);
}

function calculateDewPoint(T, RH) {
    if (isNaN(T) || isNaN(RH) || RH <= 0) return '--';
    const a = 17.27;
    const b = 237.7;
    const gamma = (a * T) / (b + T) + Math.log(RH / 100);
    const dew = (b * gamma) / (a - gamma);
    return dew.toFixed(1);
}

// 2. CSS class for card style
function getHeatIndexClass(val) {
    let num = parseFloat(val);
    return (!isNaN(num) && num >= 40) ? 'metric col-half heat-high' : 'metric col-half';
}
function getApparentClass(val) {
    let num = parseFloat(val);
    return (!isNaN(num) && num >= 36) ? 'metric col-half apparent-high' : 'metric col-half';
}
function getDewClass(val) {
    let num = parseFloat(val);
    return (!isNaN(num) && num >= 28) ? 'metric col-half dew-high' : 'metric col-half';
}
function getRain1hClass(val) {
    let num = parseFloat(val);
    if (isNaN(num)) return 'metric col-third';
    if (num >= 79.5) return 'metric col-third rain1-gray';
    if (num >= 49.5) return 'metric col-third rain1-red';
    if (num >= 19.5) return 'metric col-third rain1-yellow';
    return 'metric col-third';
}
function getRainDayClass(val) {
    let num = parseFloat(val);
    if (isNaN(num)) return 'metric col-third';
    if (num >= 350) return 'metric col-third rainDay-gray';
    if (num >= 200) return 'metric col-third rainDay-red';
    if (num >= 100) return 'metric col-third rainDay-orange';
    return 'metric col-third';
}
function getWaterLevelClass(val) {
    let num = parseFloat(val);
    if (isNaN(num) || num <= 0) return 'metric col-third flood-normal';
    if (num >= 0.5) return 'metric col-third flood-heavy';
    if (num >= 0.2) return 'metric col-third flood-mid';
    return 'metric col-third flood-light';
}

// 3. Format value + unit
function formatVal(val, unit) {
    return val === '--' ? val : `${val} ${unit}`;
}

// 4. Map marker background color
function getTempColor(tempStr) {
    const temp = parseFloat(tempStr);
    if (isNaN(temp)) return "#3498db";
    if (temp >= 35.5) return "#7b1818";
    if (temp >= 32.5) return "#d64040";
    if (temp >= 27.5) return "#ed7a7a";
    if (temp >= 22.5) return "#e8b03e";
    if (temp >= 17.5) return "#f0d390";
    if (temp >= 12.5) return "#62e0b1";
    if (temp >= 7.5) return "#64b5e7";
    return "#5c48a1";
}
function getHeatIndexColor(hiStr) {
    const hi = parseFloat(hiStr);
    if (isNaN(hi) || hi < 35.5) return "";
    if (hi >= 45) return "#900C3F";
    if (hi >= 40) return "#C70039";
    return "#FF5733";
}
function getHumidityColor(humStr) {
    const hum = parseFloat(humStr);
    if (isNaN(hum)) return "#3498db";
    if (hum >= 94.5) return "#553C9A";
    if (hum >= 84.5) return "#5DADEC";
    if (hum >= 49.5) return "#6EE7B7";
    if (hum >= 30.5) return "#E6B34B";
    return "#7b1818";
}
function getDewColor(dewStr) {
    return "#62e0b1";
}
function getWindColor(windStr) {
    const wind = parseFloat(windStr);
    if (isNaN(wind)) return "#3498db";
    if (wind >= 117.5) return "#d64040";
    if (wind >= 87.5) return "#f2a938";
    if (wind >= 62.5) return "#f9e559";
    if (wind >= 40.5) return "#60c070";
    return "#64b5e7";
}
function getPressSeaColor(pressStr) {
    const press = parseFloat(pressStr);
    if (isNaN(pressStr)) return "#3498db";
    if (press < 980) return "#d64040";
    if (press < 990) return "#e68938";
    if (press < 1000) return "#f9d342";
    return "#3a6ea5";
}
function getPressStationColor(pressStr) {
    const press = parseFloat(pressStr);
    if (isNaN(press)) return "#3498db";
    if (press < 965) return "#d64040";
    if (press < 975) return "#e68938";
    if (press < 985) return "#f9d342";
    return "#3a6ea5";
}
function getWaterLevelColor(wlStr) {
    const wl = parseFloat(wlStr);
    if (isNaN(wl) || wl <= 0) return "#3498db";
    if (wl >= 0.5) return "#e74c3c";
    if (wl >= 0.2) return "#f39c12";
    return "#f1c40f";
}

// 5. XML node extract
const extractNodeValue = (selector, parent) => {
    const el = parent.querySelector(selector);
    if (!el) return '';
    const val = el.querySelector("dValue")?.textContent || el.querySelector("Value")?.textContent || '';
    return val.trim();
};
