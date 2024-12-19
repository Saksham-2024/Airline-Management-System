const Flight = require('../models/Flights');

// Get all flights
exports.getAllFlights = (req, res) => {
  Flight.getAll((err, results) => {
    if (err) {
      res.status(500).json({ message: 'Database error', error: err });
    } else {
      res.json(results);
    }
  });
};

// Search for flights
exports.searchFlights = (req, res) => {
  const { source, destination, date } = req.query;
  Flight.searchFlights(source, destination, date, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Database error', error: err });
    } else {
      res.json(results);
    }
  });
};

// Book a flight
exports.bookFlight = (req, res) => {
  const { flightId, customerId, seatNumber } = req.body;
  Flight.bookFlight(flightId, customerId, seatNumber, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Booking failed', error: err });
    } else {
      res.json({ message: 'Flight booked successfully', reservationId: result.insertId });
    }
  });
};
