// import { weatherData } from './utils/openmeteo.js';
// import { pm2_5, pm10, truncateData } from './utils/calculations.js';

// console.log(weatherData.hourly.pm2_5)
// console.log(pm2_5, pm10);
// console.log(truncateData(pm2_5));

// nodejs imports
import https from 'https';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

// express imports
import express from 'express';
import cors from 'cors';

// constants
const PORT = process.env.PORT || 5000;
const __dirname = import.meta.dirname;
const __prevDir = path.join(__dirname, '..');
const __publicDir = path.join(__prevDir, '/', 'public');
const app = express();
const server = https.createServer();

// servers
app.listen(3000, (err) => {
	if (err) {
		if (err instanceof Error) {
			return err;
		}
		return Error(err);
	};
	console.log("Express running on port 3000");
});

server.listen(PORT, () => {
	console.log(`NodeJS running on port ${PORT}`);
});


// middleware
app.use(cors(), (req, res, next) => next());
app.use(express.json(), (req, res, next) => next());
app.use(express.static('public'), (req, res, next) => next());

// GET
app.get('/', (req, res, next) => {
	res.sendFile('index.html', err => {
		err && next(err);
	});
});
