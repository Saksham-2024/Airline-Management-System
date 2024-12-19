const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/:customerId', customerController.getCustomerDetails);
router.post('/', customerController.createCustomer);

module.exports = router;
