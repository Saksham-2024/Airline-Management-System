const db = require('../configs');

const Flights = {
    //GET (SEARCH ALL)
    getAll: (callback) => {
        const query = `Select * from Flights`;
        db.query(query, callback);
    },

    //GET (SEARCH SPECIFIC)
    getByID: (flight_id, callback) => {
        const query = `Select * from Flights where flight_id = ?`;
        db.query(query, [flight_id], callback);
    },

    //GET (SEARCH BETWEEN AIRPORTS / CITIES)
    getBySourceAndDestination: (source, destination, flight_date, callback) => {
        const query = `Select * from Flights where source = ? and destination = ? and flight_date = ?`;
        db.query(query, [source, destination, flight_date], callback);
    },

    //GET (SEARCH BY STATUS)
    getByStatus: (current_status, callback) => {
        const query = `Select * from Flights where current_status = ?`;
        db.query(query, [current_status], callback);
    },
    //GET (SEARCH BY AEROPLANE ID)
    getByAeroplaneID: (aeroplane_id, callback) => {
        const query = `Select * from Flights where aeroplane_id = ?`;
        db.query(query, [aeroplane_id], callback);
    },
    //GET (SEARCH BY DATE)
    getByDate: (date, callback) => {
        const query = `Select * from Flights where date = ?`;
        db.query(query, [date], callback);
    },

    //POST (ADD)
    addFlight: (flight_id, source, destination, date, departure_time, arrival_time, aeroplane_id, current_status, delay_minutes, callback) => {
        const query = `Insert into Flights (flight_id, source, destination, flight_date, departure_time, arrival_time, aeroplane_id, current_status, delay_minutes) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [flight_id, source, destination, date, departure_time, arrival_time, aeroplane_id, current_status, delay_minutes], callback);
    },

    //SHOULD REQUIRE ADMIN PRIVILEGES
    //PUT (UPDATE)
    updateFlight: (flight_id, source, destination, flight_date, departure_time, arrival_time, aeroplane_id, current_status, delay_minutes, callback) => {
        const query = `Update Flights set source = ?, destination = ?, flight_date = ?, departure_time = ?, arrival_time = ?, aeroplane_id = ?, current_status = ?, delay_minutes = ? where flight_id = ?`;
        db.query(query, [source, destination, flight_date, departure_time, arrival_time, aeroplane_id, current_status, delay_minutes, flight_id], callback);
    },

    //PATCH (UPDATE SPECIFIC [FOR DEPARTED AND CANCELLED FLIGHTS])
    updateFlightStatus: (flight_id, current_status, callback) => {
        const query = `Update Flights set current_status = ? where flight_id = ?`;
        db.query(query, [current_status, flight_id], callback);
    },

    //PATCH (UPDATE SPECIFIC [FOR DELAYED FLIGHTS])
    updateFlightDelay: (flight_id, delay_minutes, current_status, callback) => {
        const query = `Update Flights set delay_minutes = ?, current_status = ? where flight_id = ?`;
        db.query(query, [delay_minutes, current_status, flight_id], callback);
    },

    //DELETE   
    removeFlight: (flight_id, callback) => {
        const query = `Delete from Flights where flight_id = ?`;
        db.query(query, [flight_id], callback);
    }
};

module.exports = Flights;
// This module provides methods to interact with the Flights table in the database.
// It includes methods for retrieving all flights, searching for specific flights,
// adding new flights, updating existing flights, updating flight status, and removing flights.
// Note: The `aeroplane_id` in the Flights table is a foreign key that references the Aeroplanes table.
// The `flight_id` is the primary key for the Flights table and is used to uniquely identify each flight.