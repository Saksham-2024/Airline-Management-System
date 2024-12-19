const Customer = require('../models/customer');

// Get customer details
exports.getCustomerDetails = (req, res) => {
  const { customerId } = req.params;
  Customer.getById(customerId, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Database error', error: err });
    } else {
      res.json(results[0]);
    }
  });
};

// Create new customer
exports.createCustomer = (req, res) => {
  const { firstName, lastName, email, phoneNumber, address, dob } = req.body;
  Customer.create(firstName, lastName, email, phoneNumber, address, dob, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Failed to create customer', error: err });
    } else {
      res.json({ message: 'Customer created successfully', customerId: result.insertId });
    }
  });
};
