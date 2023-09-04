const { Country, Activity } = require('../db');

module.exports = async (req, res) => {
    try {
        const { name, difficulty, duration, season, countryId} = req.body;
        if(!name || !difficulty || !duration || !season || !countryId.length) return res.status(400).send('Falta informacion de la Actividad');
        const activity = new Activity({
            name,
            difficulty,
            duration,
            season
        })
        await activity.save();
        if (countryId.length > 0) {
            const countries = await Country.findAll({ where: { id: countryId }});
            await activity.setCountries(countries);   
        }
        return res.status(200).json({message: 'Activity created successfully', activity});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}
