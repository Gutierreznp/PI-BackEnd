const {Country, Activity} = require("../db")

module.exports = async (req, res) => {
    try {
        const allCountries = await Country.findAll({ include: Activity });
        return res.status(200).json(allCountries);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}