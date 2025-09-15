const express = require('express');
const router = express.Router();
const passengerController = require('../controllers/passengerController');

router.get('/flight/:flightId', passengerController.getAllPassengersOnFlight);
router.get('/date', passengerController.getPassengerByDate);
router.get('/source-destination', passengerController.getPassengersBySourceAndDestination);
router.get('/:passengerId', passengerController.getPassengerByID);
router.get('/name', passengerController.getPassengerByName);
router.post('/', passengerController.addPassenger);
router.put('/', passengerController.updatePassenger);
router.patch('/contact', passengerController.updatePassengerContact);
router.patch('/age', passengerController.updatePassengerAge);
router.patch('/email', passengerController.updatePassengerEmail);
router.patch('/contact-number', passengerController.updatePassengerContactNumber);
router.delete('/:passengerId', passengerController.removePassenger);

module.exports = router;
