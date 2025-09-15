const Passengers = require('../models/passengers');

exports.getAllPassengersOnFlight = (req, res) => {
    const { flightId } = req.params;
    Passengers.getAllByFlightID(flightId, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0){
            res.status(404).json({message: 'No passengers found for this flight'});
        }
        else {
            res.json(results);
        }
    });
}

exports.getPassengerByDate = (req, res) => {
    const { date } = req.query;
    Passengers.getByDate(date, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No passengers found for the given date' });
        } else {
            res.json(results);
        }
    });
}

exports.getPassengersBySourceAndDestination = (req, res) => {
    const { source, destination, date } = req.query;
    Passengers.getAllBySourceAndDestination(source, destination, date, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No passengers found for the given source and destination' });
        } else {
            res.json(results);
        }
    });
}

exports.getPassengerByID = (req, res) => { 
    const { passengerId } = req.params;
    Passengers.getByID(passengerId, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Passenger not found' });
        } else {
            res.json(results[0]);
        }
    });
}

exports.getPassengerByName = (req, res) => {
    const { name } = req.query;
    Passengers.getByName(name, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No passengers found with the given name' });
        } else {
            res.json(results);
        }
    });
}

exports.addPassenger = (req, res) => {
    const { passenger_id, flight_id, full_name, email, contact_number, age } = req.body;
    Passengers.addPassenger(passenger_id, flight_id, full_name, email, contact_number, age, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to add passenger', error: err });
        } else {
            res.status(201).json({ message: 'Passenger added successfully', passengerId: result.insertId });
        }
    });
}

exports.updatePassenger = (req, res) => {
    const { passenger_id, flight_id, full_name, email, contact_number, age } = req.body;
    Passengers.updatePassenger(passenger_id, flight_id, full_name, email, contact_number, age, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update passenger', error: err });
        } else {
            res.json({ message: 'Passenger updated successfully' });
        }
    });
}

exports.updatePassengerContact = (req, res) => {
    const { passenger_id, email, contact_number } = req.body;
    Passengers.updatePassengerContact(passenger_id, email, contact_number, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update passenger contact details', error: err });
        } else {
            res.json({ message: 'Passenger contact details updated successfully' });
        }
    });
}

exports.updatePassengerAge = (req, res) => {
    const { passenger_id, age } = req.body;
    Passengers.updatePassengerAge(passenger_id, age, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update passenger age', error: err });
        } else {
            res.json({ message: 'Passenger age updated successfully' });
        }
    });
}

exports.updatePassengerEmail = (req, res) => {
    const { passenger_id, email } = req.body;
    Passengers.updatePassengerEmail(passenger_id, email, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update passenger email', error: err });
        } else {
            res.json({ message: 'Passenger email updated successfully' });
        }
    });
}

exports.updatePassengerContactNumber = (req, res) => {
    const { passenger_id, contact_number } = req.body;
    Passengers.updatePassengerContactNumber(passenger_id, contact_number, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update passenger contact number', error: err });
        } else {
            res.json({ message: 'Passenger contact number updated successfully' });
        }
    });
}

exports.removePassenger = (req, res) => {  
    const { passengerId } = req.params;
    Passengers.removePassenger(passengerId, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to remove passenger', error: err });
        } else {
            res.json({ message: 'Passenger removed successfully' });
        }
    });
}