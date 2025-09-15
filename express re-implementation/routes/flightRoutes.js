const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.get('/', flightController.getAllFlights);
router.get('/search', flightController.getFlightsBySourceAndDestination);
router.get('/status', flightController.getFlightsByStatus);
router.get('/aeroplane', flightController.getFlightsByAeroplaneID);
router.get('/date', flightController.getFlightsByDate)
router.get('/:flightId', flightController.getFlightById);
router.post('/', flightController.newFlight);
router.put('/', flightController.updateFlight);
router.patch('/status', flightController.updateFlightStatus);
router.patch('/delay', flightController.updateFlightDelay);
router.delete('/:flightId', flightController.removeFlight);

module.exports = router;