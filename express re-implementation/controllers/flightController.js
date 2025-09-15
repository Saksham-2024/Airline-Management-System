const Flights = require('../models/flights');

exports.getAllFlights = (req, res) => {
    Flights.getAll((err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else {
            res.json(results);
        }
    });
}

exports.getFlightById = (req, res) => {
    const { flightId } = req.params;
    Flights.getByID(flightId, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Flight not found' });
        } else {
            res.json(results[0]);
        }
    });
}

exports.getFlightsBySourceAndDestination = (req, res) => {
    const { source, destination, date } = req.query;
    Flights.getBySourceAndDestination(source, destination, date, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No flights found for the given source and destination' });
        } else {
            res.json(results);
        }
    });
}   

exports.getFlightsByStatus = (req, res) => {
    const { current_status } = req.query;
    Flights.getByStatus(current_status, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No flights found with the given status' });
        } else {
            res.json(results);
        }
    });
}

exports.getFlightsByAeroplaneID = (req, res) => {
    const { aeroplane_id } = req.query;
    Flights.getByAeroplaneID(aeroplane_id, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No flights found for the given aeroplane ID' });
        } else {
            res.json(results);
        }
    });
}

exports.getFlightsByDate = (req, res) => {
    const { date } = req.query;
    Flights.getByDate(date, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No flights found for the given date' });
        } else {
            res.json(results);
        }
    });
}

exports.newFlight = (req, res) => {
    const { flight_id, customer_id, seat_number, price, status, payment_status } = req.body;
    Flights.addFlight(flight_id, customer_id, seat_number, price, status, payment_status, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to add new flight', error: err });
        } else {
            res.status(201).json({ message: 'Flight added successfully', flightId: result.insertId });
        }
    });
}

exports.updateFlight = (req, res) => {
    const { flight_id, source, destination, date, departure_time, arrival_time, aeroplane_id, current_status, delay_minutes } = req.body;
    Flights.updateFlight(flight_id, source, destination, date, departure_time, arrival_time, aeroplane_id, current_status, delay_minutes, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update flight', error: err });
        } else {
            res.json({ message: 'Flight updated successfully' });
        }
    });
}

exports.updateFlightStatus = (req, res) => {
    const { flight_id, current_status } = req.body;
    Flights.updateFlightStatus(flight_id, current_status, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update flight status', error: err });
        } else {
            res.json({ message: 'Flight status updated successfully' });
        }
    });
}

exports.updateFlightDelay = (req, res) => {
    const { flight_id, delay_minutes, current_status } = req.body;
    Flights.updateFlightDelay(flight_id, delay_minutes, current_status, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update flight delay', error: err });
        } else {
            res.json({ message: 'Flight delay updated successfully' });
        }
    });
}

exports.removeFlight = (req, res) => {
    const { flightId } = req.params;
    Flights.removeFlight(flightId, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to remove flight', error: err });
        } else {
            res.json({ message: 'Flight removed successfully' });
        }
    });
}
