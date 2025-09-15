const db = require('../configs');

const Passengers = {
    //GET (ALL PASSENGERS FOR A FLIGHT BY FLIGHT ID)
    getAllByFlightID: (flight_id, callback) => {
        const query = `Select * from Passengers where flight_id = ?`;
        db.query(query, [flight_id], callback);
    },

    //GET (ALL PASSENGERS ON A PARTICULAR DATE USING FLIGHT TABLE WITH FLIGHT ID AS FOREIGN KEY)
    getAllByDate: (date, callback) => {
        const query = `Select * from Passengers where flight_id in (Select flight_id from Flights where date = ?)`;
        db.query(query, [date], callback);
    },

    //GET (ALL PASSENGERS BETWEEN TWO CITIES)
    getAllBySourceAndDestination: (source, destination, date, callback) => {
        const query = `Select * from Passengers where flight_id in (Select flight_id from Flights where source = ? and destination = ? and date = ?)`;
        db.query(query, [source, destination, date], callback);
    },

    //GET (SEARCH SPECIFIC PASSENGER BY ID)
    getByID: (passenger_id, callback) => {
        const query = `Select * from Passengers where passenger_id = ?`;
        db.query(query, [passenger_id], callback);
    },

    //GET (SEARCH BY NAME)
    getByName: (name, callback) => {
        const query = `Select * from Passengers where name like ?`;
        db.query(query, [`%${name}%`], callback);
    },
    
    //POST (ADD PASSENGER)
    addPassenger: (passenger_id, flight_id, full_name, email, contact_number, age, callback) => {
        const query = `Insert into Passengers (passenger_id, flight_id, full_name, email, contact_number, age) values (?, ?, ?, ?, ?, ?)`;
        db.query(query, [passenger_id, flight_id, full_name, email, contact_number, age], callback);
    },

    //PUT (UPDATE PASSENGER DETAILS)
    updatePassenger: (passenger_id, flight_id, full_name, email, contact_number, age, callback) => {
        const query = `Update Passengers set flight_id = ?, full_name = ?, email = ?, contact_number = ?, age = ? where passenger_id = ?`;
        db.query(query, [flight_id, full_name, email, contact_number, age, passenger_id], callback);
    },

    //PATCH (UPDATE PASSENGER CONTACT DETAILS)
    updatePassengerContact: (passenger_id, email, contact_number, callback) => {
        const query = `Update Passengers set email = ?, contact_number = ? where passenger_id = ?`;
        db.query(query, [email, contact_number, passenger_id], callback);
    },

    //PATCH (UPDATE PASSENGER AGE)
    updatePassengerAge: (passenger_id, age, callback) => {
        const query = `Update Passengers set age = ? where passenger_id = ?`;
        db.query(query, [age, passenger_id], callback);
    },  

    //PATCH (UPDATE ONLY EMAIL)
    updatePassengerEmail: (passenger_id, email, callback) => {
        const query = `Update Passengers set email = ? where passenger_id = ?`;
        db.query(query, [email, passenger_id], callback);
    },

    //PATCH (UPDATE ONLY CONTACT NUMBER)
    updatePassengerContactNumber: (passenger_id, contact_number, callback) => {
        const query = `Update Passengers set contact_number = ? where passenger_id = ?`;
        db.query(query, [contact_number, passenger_id], callback);
    },

    //DELETE (REMOVE PASSENGER)
    removePassenger: (passenger_id, callback) => {
        const query = `Delete from Passengers where passenger_id = ?`;
        db.query(query, [passenger_id], callback);
    }
};

module.exports = Passengers;
// This module provides methods to interact with the Passengers table in the database.
// It includes methods for retrieving all passengers for a flight, searching for specific passengers,
// adding new passengers, updating existing passenger details, and removing passengers.
// Note: The `flight_id` in the Passengers table is a foreign key that references the Flights table.
// The `passenger_id` is a unique identifier for each passenger.