const { Country } = require('../db');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { capital, population} = req.body;

    const country = await Country.findByPk(id);

    if(!country) return res.status(404).json({message: 'Pais no encontrado!'});

    if(capital) {
        country.capital = capital;
    }

    if(population) {
        country.population = population;
    }
    await country.save();

    return res.status(200).json({ message: 'Pais actualizado!', country });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};