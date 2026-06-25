import { weatherData } from './utils/openmeteo.js';
import { pm2_5_8Hour, pm10_8Hour } from './utils/calculations.js';

console.log(weatherData.hourly.pm2_5)
console.log(pm2_5_8Hour, pm10_8Hour);
 
