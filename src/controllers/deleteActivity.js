const { Country, Activity} = require('../db')

module.exports = async (req, res) => {
    try {
        const { id } = req.params;

       const activityDeleted = await Activity.findByPk(id);

       await activityDeleted.destroy();

        return res.status(200).json({message:'Activity eliminated!', activityDeleted })
    } catch (error) {
        return res.status(400).send(error.message);
    }
}