import { weatherData as data} from "./openmeteo.js";
export { pm2_5_8Hour, pm10_8Hour, preciseRound };

// Pollutant period
const pm2_5 = {
    name: 'pm2.5',
    current: data.current.pm2_5,
    hourly: data.hourly.pm2_5, // array
    hours_1: data.hourly.pm2_5?.slice(0,1),
    hours_8: data.hourly.pm2_5?.slice(0,8).reduce((a, cV) => a + cV)!/8, 
}

const pm10 = {
    name: 'pm10',
    current: data.current.pm10,
    hourly: data.hourly.pm10, // array
    hours_1: data.hourly.pm10?.slice(0,1),
    hours_8: data.hourly.pm10?.slice(0,8).reduce((a, cV) => a + cV)!/8, 
}

function calculatePeriod(period: { })

// Truncate pollutant data
function truncateData(pollutant: { field : string | number }) {
    switch(pollutant.field) {
        
        // round 1
        case 'pm2.5':
        
    }
}

// Concentration Breakpoints
const pm2_5 = [[0.0, 9.0], [9.1, 35.4], [35.5, 55.4], [55.5, 125.4], [125.5, 225.4], [225.5]];
const pm10 = [[0, 54], [55, 154], [155, 254], [255, 354], [355, 424], [425]];

function preciseRound(value: number, decimal: number) {
    return Number(Math.round((value+'e'+decimal) as any)+'e-'+decimal);
};

function calcAqi(pollutant: string, concentration: number) {
    
}