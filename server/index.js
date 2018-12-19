const express = require('express');
const app = express();
const PATH = process.cwd(); // get current working directory of the server script
const PORT = 4000;
const cityStateData = require(`${PATH}/json/statesAndCities.json`);

// serve static files
app.use('/mentor', express.static(`${PATH}/public/mentor`));
app.use('/', express.static(`${PATH}/public/home`));

// serve the json
app.get('/city-state-data', (req, res) => res.json(cityStateData));

app.listen(PORT, () => console.log(`app listening on ${PORT}`));
