// Weather stations (NO water level display)
const weatherStations = {
    "紀念孫中山市政公園": { code: "DP", lat: 22.215322, lng: 113.543490 },
    "黑沙環": { code: "EM", lat: 22.207129, lng: 113.559971 },
    "大炮台": { code: "FM", lat: 22.197066, lng: 113.542261 },
    "外港": { code: "PE", lat: 22.196556, lng: 113.558333 },
    "媽閣": { code: "MM", lat: 22.185863, lng: 113.530675 },
    "大潭山": { code: "TG", lat: 22.159102, lng: 113.568947 },
    "東亞運大馬路": { code: "JA", lat: 22.155396, lng: 113.542412 },
    "九澳": { code: "KV", lat: 22.134686, lng: 113.580143 },
    "澳門大學": { code: "UM", lat: 22.131808, lng: 113.546970 },
    "路環市區": { code: "DC", lat: 22.117091, lng: 113.551041 },
    "西灣大橋": { code: "PV", lat: 22.173240, lng: 113.535416 },
    "友誼大橋北": { code: "PN", lat: 22.191167, lng: 113.563219 },
    "友誼大橋南": { code: "PS", lat: 22.180189, lng: 113.563299 },
    "嘉樂庇總督大橋": { code: "PG", lat: 22.180057, lng: 113.545435 },
    "澳門大橋北": { code: "MN", lat: 22.186985, lng: 113.573231 },
    "澳門大橋南": { code: "MS", lat: 22.173484, lng: 113.573047 },
    "蓮花大橋": { code: "LH", lat: 22.139934, lng: 113.549094 }
};

// Water level stations (ONLY show water level data)
const waterStations = [
    { name: "青洲河邊馬路", code: "QZ", lat: 22.212097, lng: 113.535243 },
    { name: "花地瑪教會街", code: "HDM", lat: 22.211374, lng: 113.546674 },
    { name: "紅街市", code: "HJS", lat: 22.205155, lng: 113.544597 },
    { name: "光復街", code: "GFJ", lat: 22.202498, lng: 113.544916 },
    { name: "永樂戲院", code: "YL", lat: 22.202574, lng: 113.542885 },
    { name: "內港北", code: "NGN", lat: 22.199984, lng: 113.536861 },
    { name: "內港", code: "NG", lat: 22.198031, lng: 113.536426 },
    { name: "康公廟", code: "KGM", lat: 22.197330, lng: 113.537858 },
    { name: "司打口", code: "SDK", lat: 22.193228, lng: 113.536822 },
    { name: "內港南", code: "NGS", lat: 22.190755, lng: 113.532853 },
    { name: "下環街", code: "XHJ", lat: 22.189418, lng: 113.534413 },
    { name: "菜園路", code: "CYL", lat: 22.159073, lng: 113.558961 },
    { name: "沙維斯街", code: "SWS", lat: 22.157666, lng: 113.550649 },
    { name: "柯維納馬路", code: "KWN", lat: 22.157473, lng: 113.548550 },
    { name: "益隆", code: "YLON", lat: 22.156058, lng: 113.559474 },
    { name: "松樹尾", code: "SSW", lat: 22.154766, lng: 113.557309 },
    { name: "黑橋街", code: "HQJ", lat: 22.154409, lng: 113.556284 },
    { name: "石排灣", code: "SPW", lat: 22.131648, lng: 113.562820 },
    { name: "聖方濟各堂", code: "SFJ", lat: 22.117434, lng: 113.551004 }
];

// Field mapping for table header
const fieldMap = {
    tempCurrent: { field: 'temp', label: '實時氣溫', unit: '℃' },
    tempMax: { field: 'tempMax', label: '最高氣溫', unit: '℃' },
    tempMin: { field: 'tempMin', label: '最低氣溫', unit: '℃' },
    apparentTemp: { field: 'apparentTemp', label: '體感溫度', unit: '℃' },
    heatIndex: { field: 'heatIndex', label: '酷熱指數', unit: '℃' },
    dewPoint: { field: 'dewPoint', label: '露點溫度', unit: '℃' },
    humidity: { field: 'humidity', label: '相對濕度', unit: '%' },
    windDir: { field: 'windDir', label: '風向', unit: '' },
    windSpeed: { field: 'windSpeed', label: '風速', unit: 'km/h' },
    windGust: { field: 'windGust', label: '陣風', unit: 'km/h' },
    pressSea: { field: 'pressSea', label: '海平面氣壓', unit: 'hPa' },
    pressStation: { field: 'pressStation', label: '站氣壓', unit: 'hPa' },
    waterLevel: { field: 'waterLevel', label: '實時水位', unit: 'm' }
};