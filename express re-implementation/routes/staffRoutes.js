const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

router.get('/', staffController.getAllStaff);
router.get('/name', staffController.getStaffByName);
router.get('/role/:role', staffController.getStaffByPosition);
router.get('/flight/:flightId', staffController.getStaffByFlightId);
router.get('/:staffId', staffController.getStaffById);
router.post('/', staffController.addStaff);
router.put('/', staffController.updateStaff);
router.patch('/position', staffController.updateStaffPosition);
router.patch('/salary', staffController.updateStaffSalary);
router.patch('/flight-assigned', staffController.updateStaffFlightAssigned);
router.patch('/email', staffController.updateStaffEmail);
router.patch('/contact-number', staffController.updateStaffContactNumber);
router.patch('/contact', staffController.updateStaffEmailAndContactNumber);
router.delete('/:staffId', staffController.removeStaff);

module.exports = router;