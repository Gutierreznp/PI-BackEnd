const { Country, Activity, country_activity } = require('../db');

module.exports = async (req, res) => {
    try {
        const { idPais, idActivity } = req.params;

        const country = await Country.findByPk(idPais);
        
        const activity = await Activity.findByPk(idActivity);

        if(!country || !activity) return res.status(404).json({error: 'Country or activity not found!'});

        const countryActivity = await country_activity.findOne({ where: {CountryId: idPais, ActivityId: idActivity}});

        if(!countryActivity) return res.status(404).json({error: 'Activity does not exist in this country!'});

        await countryActivity.destroy();

        const newCountry = await Country.findByPk(idPais, {include: Activity})

        return res.status(200).json(newCountry);

    } catch (error) {

        return res.status(400).json({error: error.message});
    }
}