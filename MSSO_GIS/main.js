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
            // Only keep DARK color version for white text
            legendHTML = `
                <div class="legend-item"><div class="legend-color" style="background:#a864c7"></div><span style="color:#fff;">≥54.5℃ 極度危險</span></div>
                <div class="legend-item"><div class="legend-color" style="background:#e66a6a"></div><span style="color:#fff;">45.5~54.4℃ 危險</span></div>
                <div class="legend-item"><div class="legend-color" style="background:#ffb880"></div><span style="color:#fff;">39.5~45.4℃ 特別注意</span></div>
                <div class="legend-item"><div class="legend-color" style="background:#fff299"></div><span style="color:#fff;">35.5~39.4℃ 注意</span></div>
                <div class="legend-item"><div class="legend-color" style="background:#99e699"></div><span style="color:#fff;">&lt;35.5℃ 正常</span></div>`;
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

        // Hide legend completely for windDir & dewPoint
        case "windDir":
        case "dewPoint":
            legendHTML = "";
            break;

        default:
            legendHTML = `<div class="legend-item" style="color:#777;">無圖例</div>`;
    }
    // Only ONE assignment here
    legendContent.innerHTML = legendHTML;
}
