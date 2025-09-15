const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getAllBookings);
router.get('/customer/:customerId', bookingController.getBookingsByCustomerId);
router.get('/flight/:flightId', bookingController.getBookingsByFlightId);
router.get('/:bookingId', bookingController.getBookingById);
router.post('/', bookingController.addBooking);
router.patch('/:bookingId', bookingController.updateBookingStatus);
router.delete('/:bookingId', bookingController.removeBooking);

module.exports = router;