const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.get('/', flightController.getAllFlights);
router.get('/search', flightController.searchFlights);
router.post('/book', flightController.bookFlight);

module.exports = router;
