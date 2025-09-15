const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.send('API is running');
});

// Import individual route files
const staffRoutes = require('./staffRoutes');
const flightRoutes = require('./flightRoutes');
const passengerRoutes = require('./passengerRoutes');
const bookingRoutes = require('./bookingRoutes');
const aeroplaneRoutes = require('./aeroplaneRoutes');

// Mount them on different paths
router.use('/staff', staffRoutes);
router.use('/flights', flightRoutes);
router.use('/passenger', passengerRoutes);
router.use('/bookings', bookingRoutes);
router.use('/aeroplanes', aeroplaneRoutes);

module.exports = router;
