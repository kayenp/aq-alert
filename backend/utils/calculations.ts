import { weatherData as data} from "./openmeteo.js";
export { pm2_5_8Hour, pm10_8Hour, preciseRound };

// Pollutant period
const pm2_5Curr = data.current.pm2_5;
const pm2_5Hourly = data.hourly.pm2_5;
const pm2_5_1Hour = pm2_5Hourly?.slice(0,1);
const pm2_5_8Hour = pm2_5Hourly?.slice(0,8).reduce((acc, currVal) => acc + currVal)!/8;
const pm10Curr = data.current.pm10;
const pm10Hourly = data.hourly.pm10;
const pm10_1Hour = pm10Hourly?.slice(0,1);
const pm10_8Hour = pm10Hourly?.slice(0,8).reduce((acc, currVal) => acc + currVal)!/8;

// Truncate pollutant data


// Concentration Breakpoints
const pm2_5 = [[0.0, 9.0], [9.1, 35.4], [35.5, 55.4], [55.5, 125.4], [125.5, 225.4], [225.5]];
const pm10 = [[0, 54], [55, 154], [155, 254], [255, 354], [355, 424], [425]];

function preciseRound(value: number, decimal: number) {
    return Number(Math.round((value+'e'+decimal) as any)+'e-'+decimal);
};

function calcAqi(pollutant: string, concentration: number) {
    
}