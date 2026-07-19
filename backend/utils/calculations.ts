import { weatherData as data} from "./openmeteo.js";
export { pm2_5, pm10, preciseRound };

// Pollutant period
const pm2_5 = {
    name: 'pm2.5',
    current: data.current.pm2_5,
    hourly: data.hourly.pm2_5, // array
    hours_1: data.hourly.pm2_5?.[0],
    hours_8: data.hourly.pm2_5?.slice(0,8).reduce((a, cV) => a + cV)!/8, 
}

const pm10 = {
    name: 'pm10',
    current: data.current.pm10,
    hourly: data.hourly.pm10, // array
    hours_1: data.hourly.pm10?.[0],
    hours_8: data.hourly.pm10?.slice(0,8).reduce((a, cV) => a + cV)!/8, 
}

// Truncate pollutant data
export function truncateData(pollutant) {
    switch(pollutant.field) {
        
        // round to 1 decimal
        case 'pm2.5': preciseRound(pm2_5.hours_8, 1);
        
        // round to integer
        case 'pm10': preciseRound(pm10.hours_8, 0);
    }
}

// Concentration Breakpoints
const pm2_5_break = [[0.0, 9.0], [9.1, 35.4], [35.5, 55.4], [55.5, 125.4], [125.5, 225.4], [225.5]];
const pm10_break = [[0, 54], [55, 154], [155, 254], [255, 354], [355, 424], [425]];

function preciseRound(value: number, decimal: number) {
    return Number(Math.round((value +'e'+ decimal) as any) +'e-'+ decimal);
};

function calcAqi(pollutant: string, concentration: number) {
    
}