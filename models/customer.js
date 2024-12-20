const db = require('../config');

const Customer = {
  getById: (customerId, callback) => {
    const query = 'SELECT * FROM Customers WHERE customer_id = ?';
    db.query(query, [customerId], callback);
  },

  create: (firstName, lastName, email, phoneNumber, address, dob, callback) => {
    const query = 'INSERT INTO Customers (first_name, last_name, email, phone_number, address, date_of_birth) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [firstName, lastName, email, phoneNumber, address, dob], callback);
  },
};

module.exports = Customer;
