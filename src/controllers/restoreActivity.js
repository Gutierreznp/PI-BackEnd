const { Activity } = require('../db');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const activity = await Activity.findByPk(id, { paranoid: false });

    if (!activity) {
      return res.status(404).json({ message: 'Actividad no encontrada!' });
    }

    await activity.restore();

    return res.status(200).json({ message: 'Actividad restaurada!', activity });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};