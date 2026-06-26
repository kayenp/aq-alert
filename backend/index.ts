import { weatherData } from './utils/openmeteo.js';
import { pm2_5, pm10, truncateData } from './utils/calculations.js';

console.log(weatherData.hourly.pm2_5)
console.log(pm2_5, pm10);
console.log(truncateData(pm2_5))
 
