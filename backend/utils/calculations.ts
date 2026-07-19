import { weatherData as data} from "./openmeteo.js";
export { pm2_5, pm10, preciseRound, truncateData };

// Pollutant period
const pm2_5 = {
    name: 'pm2.5',
    current: data.current.pm2_5,
    hourly: data.hourly.pm2_5, // array
    latestHour: data.hourly.pm2_5?.[0],
    avg8hr: data.hourly.pm2_5?.slice(0,8).reduce((a, cV) => a + cV)!/8, 
}

const pm10 = {
    name: 'pm10',
    current: data.current.pm10,
    hourly: data.hourly.pm10, // array
    latestHour: data.hourly.pm10?.[0],
    avg8hr: data.hourly.pm10?.slice(0,8).reduce((a, cV) => a + cV)!/8, 
}

// Truncate pollutant data
function truncateData(pollutant) {
    let decimal = 0;

    switch(pollutant.name) {
        case "pm2.5": decimal = 1;
            break;
        case "pm10": decimal = 0;
            break;
    };

    for (let prop in pollutant) {
        if (typeof pollutant[prop] === "number") {
            pollutant[prop] = preciseRound(pollutant[prop], decimal);
        }
    }
    return pollutant;
}

function preciseRound(value: number, decimal: number) {
    return Number(Math.round((value +'e'+ decimal) as any) +'e-'+ decimal);
};


// Concentration Breakpoints
const pm2_5_break = [[0.0, 9.0], [9.1, 35.4], [35.5, 55.4], [55.5, 125.4], [125.5, 225.4], [225.5]];
const pm10_break = [[0, 54], [55, 154], [155, 254], [255, 354], [355, 424], [425]];


function calcAqi(pollutant) {
    let highCon = Math.max(pollutant.current, pollutant.latestHour, pollutant.avg8hr);
}