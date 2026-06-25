export { preciseRound }
import { currPm2_5, currPm10 } from "./fetch-data.js";

// AQI truncations
const pm2_5Concentration = preciseRound(currPm2_5, 1);
const pm10Concentration = Math.round(currPm10);

function calcConcentration()

// Concentration Breakpoints
const pm2_5 = [[0.0, 9.0], [9.1, 35.4], [35.5, 55.4], [55.5, 125.4], [125.5, 225.4], [225.5]];
const pm10 = [[0, 54], [55, 154], [155, 254], [255, 354], [355, 424], [425]];

function preciseRound(value: number, decimal: number) {
    return Number(Math.round((value+'e'+decimal) as any)+'e-'+decimal);
};

function calcAqi(pollutant: string, concentration: number) {
    
}