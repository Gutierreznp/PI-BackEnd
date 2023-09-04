const { Router } = require("express");
const getActivities = require("../controllers/getActivities");
const getCountry = require("../controllers/getCountry");
const getCountryById = require("../controllers/getCountryById");
const getCountryByName = require("../controllers/getCountryByName");
const postActivities = require("../controllers/postActivities");
const deleteActivity = require("../controllers/deleteActivity");
const deleteActivityByIdCountry = require("../controllers/deleteActivityByIdCountry");
const restoreActivity = require("../controllers/restoreActivity");
const deleteCountryById = require("../controllers/deleteCountryById");
const updateCountry = require("../controllers/updateCountry")

const router = Router();

router.get('/countries', getCountry);

router.get('/countries/name',getCountryByName);

router.get('/countries/:idPais',getCountryById);

router.delete('/countries/:idPais/:idActivity', deleteActivityByIdCountry);

router.post('/activities', postActivities);

router.post('/activities/:id', restoreActivity);

router.get('/activities', getActivities);

router.delete('/activities/:id', deleteActivity);

router.delete('/countries/:id', deleteCountryById);

router.put('/countries/:id', updateCountry);

module.exports = router;
