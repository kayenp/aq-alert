import { fetchWeatherApi } from "openmeteo";
export { weatherData };


const params = {
	latitude: 34.0953,
	longitude: -118.127,
	hourly: ["pm10", "pm2_5", "us_aqi", "us_aqi_pm2_5", "us_aqi_pm10", "us_aqi_nitrogen_dioxide", "us_aqi_carbon_monoxide", "us_aqi_ozone", "us_aqi_sulphur_dioxide"],
	current: ["pm2_5", "pm10"],
	// Number of days to forecast. No property = 5 days
	forecast_days: 1,
};
const url = "https://air-quality-api.open-meteo.com/v1/air-quality";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const latitude = response?.latitude();
const longitude = response?.longitude();
const elevation = response?.elevation();
const utcOffsetSeconds = response?.utcOffsetSeconds();

console.log(
	`\nCoordinates: ${latitude}°N ${longitude}°E`,
	`\nElevation: ${elevation}m asl`,
	`\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
);

const current = response?.current()!;
const hourly = response?.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	current: {
		time: new Date((Number(current.time()) + (utcOffsetSeconds || 0)) * 1000),
		pm2_5: current.variables(0)!.value(),
		pm10: current.variables(1)!.value(),
	},
	hourly: {
		time: Array.from(
			{ length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() }, 
			(_ , i) => new Date((Number(hourly.time()) + i * hourly.interval() + (utcOffsetSeconds || 0)) * 1000)
		),
		pm10: hourly.variables(0)!.valuesArray(),
		pm2_5: hourly.variables(1)!.valuesArray(),
		us_aqi: hourly.variables(2)!.valuesArray(),
		us_aqi_pm2_5: hourly.variables(3)!.valuesArray(),
		us_aqi_pm10: hourly.variables(4)!.valuesArray(),
		us_aqi_nitrogen_dioxide: hourly.variables(5)!.valuesArray(),
		us_aqi_carbon_monoxide: hourly.variables(6)!.valuesArray(),
		us_aqi_ozone: hourly.variables(7)!.valuesArray(),
		us_aqi_sulphur_dioxide: hourly.variables(8)!.valuesArray(),
	},
};

// The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
console.log(
	`\nCurrent time: ${weatherData.current.time}\n`,
	`\nCurrent pm2_5: ${weatherData.current.pm2_5}`,
	`\nCurrent pm10: ${weatherData.current.pm10}`,
);
console.log("\nHourly data:\n", weatherData.hourly)
