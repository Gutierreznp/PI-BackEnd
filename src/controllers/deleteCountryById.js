const { Country, Activity} = require('../db')

module.exports = async (req, res) => {
    try {
        const { id } = req.params;

       const country = await Country.findByPk(id, { include: Activity });

       if(!country) return res.status(404).json({message: 'Pais no encontrado'})

       const activities = country.Activities;

       for (const activity of activities) {
        await activity.destroy();
       }

       await country.destroy();

        return res.status(200).json({message:'Country eliminated', country })
    } catch (error) {
        return res.status(400).send(error.message);
    }
}