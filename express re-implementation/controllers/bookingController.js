const Bookings = require('../models/bookings');

exports.getAllBookings = (req, res) => {
    Bookings.getAll((err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else {
            res.json(results);
        }
    });
}

exports.getBookingById = (req, res) => {
    const { bookingId } = req.params;
    Bookings.getById(bookingId, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Booking not found' });
        } else {
            res.json(results[0]);
        }
    });
}

exports.getBookingsByCustomerId = (req, res) => {
    const { customerId } = req.params;
    Bookings.getByCustomerId(customerId, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No bookings found for this customer' });
        } else {
            res.json(results);
        }
    });
}

exports.getBookingsByFlightId = (req, res) => {
    const { flightId } = req.params;
    Bookings.getByFlightId(flightId, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No bookings found for this flight' });
        } else {
            res.json(results);
        }
    });
}

exports.addBooking = (req, res) => {
    const { customer_id, flight_id, seat_number, price, status, payment_status } = req.body;
    Bookings.addBooking(customer_id, flight_id, seat_number, price, status, payment_status, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to add booking', error: err });
        } else {
            res.status(201).json({ message: 'Booking added successfully', bookingId: result.insertId });
        }
    });
}

exports.updateBookingStatus = (req, res) => {
    const { booking_id, status, payment_status } = req.body;
    Bookings.updateBookingStatus(booking_id, status, payment_status, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update booking', error: err });
        } else {
            res.json({ message: 'Booking updated successfully' });
        }
    });
}

exports.removeBooking = (req, res) => {
    const { bookingId } = req.params;
    Bookings.removeBooking(bookingId, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to remove booking', error: err });
        } else {
            res.json({ message: 'Booking removed successfully' });
        }
    });
}