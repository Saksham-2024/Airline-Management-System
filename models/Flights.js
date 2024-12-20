const db = require('../config');

const Flight = {
  getAll: (callback) => {
    const query = 'SELECT * FROM Flights';
    db.query(query, callback);
  },

  getById: (flightId, callback) => {
    const query = 'SELECT * FROM Flights WHERE flight_id = ?';
    db.query(query, [flightId], callback);
  },

  searchFlights: (source, destination, date, callback) => {
    const query = `
      SELECT f.*, a1.airport_name AS departure_airport, a2.airport_name AS arrival_airport
      FROM Flights f
      JOIN Airports a1 ON f.departure_airport_id = a1.airport_id
      JOIN Airports a2 ON f.arrival_airport_id = a2.airport_id
      WHERE a1.city = ? AND a2.city = ? AND f.departure_time LIKE ?`;
    db.query(query, [source, destination, `${date}%`], callback);
  },

  bookFlight: (flightId, customerId, seatNumber, callback) => {
    const query = 'INSERT INTO Reservations (customer_id, flight_id, seat_number) VALUES (?, ?, ?)';
    db.query(query, [customerId, flightId, seatNumber], callback);
  },
};

module.exports = Flight;
