const db = require('../configs');

const Bookings = {
    // GET (ALL BOOKINGS)
    getAll: (callback) => {
        const query = `Select * from Bookings`;
        db.query(query, callback);
    },

    // GET (SEARCH BOOKING BY ID)
    getById: (booking_id, callback) => {
        const query = `Select * from Bookings where booking_id = ?`;
        db.query(query, [booking_id], callback);
    },

    // GET (SEARCH BOOKINGS FOR A CUSTOMER ID)
    getByCustomerId: (customer_id, callback) => {
        const query = `Select * from Bookings where customer_id = ?`;
        db.query(query, [customer_id], callback);
    },

    //GET (SEARCH BOOKING FOR A FLIGHT ID)
    getByFlightId: (flight_id, callback) => {
        const query = `Select * from Bookings where flight_id = ?`;
        db.query(query, [flight_id], callback);
    },

    // POST (ADD A NEW BOOKING)
    addBooking: (customer_id, flight_id, seat_number, price, status, payment_status, callback) => {
        const query = `INSERT INTO Bookings (customer_id, flight_id, seat_number, price, status, payment_status)
            VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(query, [customer_id, flight_id, seat_number, price, status, payment_status], callback);
    },

    // PUT (UPDATE BOOKING DETAILS)
    updateBookingStatus: (booking_id, status, payment_status, callback) => {
        const query = `UPDATE Bookings SET status = ?, payment_status = ? WHERE booking_id = ? `;
        db.query(query, [status, payment_status, booking_id], callback);
    },

    // DELETE (REMOVE A BOOKING)
    removeBooking: (booking_id, callback) => {
        const query = `DELETE FROM Bookings WHERE booking_id = ?`;
        db.query(query, [booking_id], callback);
    }
};

module.exports = Bookings;
// This module provides methods to interact with the Bookings table in the database.
// It includes methods for retrieving all bookings, searching for specific bookings by ID or customer/flight ID,
// adding new bookings, updating booking details, and removing bookings.
// Note: The `Bookings` table is assumed to have a foreign key relationship with the `Customers` and `Flights` tables.
// The `customer_id` in the Bookings table references the Customers table,
// and the `flight_id` references the Flights table.