const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
    let { country } = req.query;
    try {
        const countryFound = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${country}%`
                }
            },
            include: Activity 
        });
        return res.status(200).json(countryFound);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}