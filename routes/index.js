const express = require('express');
const router = express.Router();
const flightRoutes = require('./flightRoutes');
const customerRoutes = require('./customerRoutes');

// Routes
router.use('/flights', flightRoutes);
router.use('/customers', customerRoutes);

module.exports = router;
