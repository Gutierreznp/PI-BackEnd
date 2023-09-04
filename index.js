require("dotenv").config();
const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;
const {Country} = require('./src/db');

conn.sync({ force: true }).then(() => {
server.listen(PORT, "0.0.0.0", async () => {
  const allCountries = await Country.findAll();
  if (!allCountries.length) {
    const response = await axios(`http://localhost:5000/countries`);
    let countriesDB = response.data.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        region: country.region,
        capital: country.capital ? country.capital[0] : 'No tiene capital!',
        subregion: country.subregion,
        population: country.population
      }
    })
    await Country.bulkCreate(countriesDB);
  }
  console.log(`Server running on port ${PORT}`);
})
}).catch(error => console.error(error))
