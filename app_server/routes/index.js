const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/list');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/rest1', ctrlLocations.rest1);
router.get('/signup', ctrlLocations.signup);
router.get('/help', ctrlLocations.help);
/* Other pages */

module.exports = router;