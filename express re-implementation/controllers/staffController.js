const Staff = require('../models/staff');

exports.getAllStaff = (req, res) => {
    Staff.getAll((err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else {
            res.json(results);
        }
    });
}

exports.getStaffById = (req, res) => {
    const { staffId } = req.params;
    Staff.getByID(staffId, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Staff not found' });
        } else {
            res.json(results[0]);
        }
    });
}

exports.getStaffByName = (req, res) => {
    const { name } = req.query;
    Staff.getByName(name, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No staff found with the given name' });
        } else {
            res.json(results);
        }
    });
}

exports.getStaffByPosition = (req, res) => {
    const position = req.params.role;
    Staff.getByPosition(position, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No staff found with the given position' });
        } else {
            res.json(results);
        }
    });
}


exports.getStaffByFlightId = (req, res) => {
    const { flightId } = req.params;
    Staff.getByFlightAssigned(flightId, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No staff found for this flight' });
        } else {
            res.json(results);
        }
    });
}

exports.addStaff = (req, res) => {
    const {staff_id, name, email, contact_number, position, flight_assigned, employee_since, salary} = req.body;
    Staff.addStaff(staff_id, name, email, contact_number, position, flight_assigned, employee_since, salary, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to add staff', error: err });
        } else {
            res.status(201).json({ message: 'Staff added successfully', staffId: result.insertId });
        }
    });
}

exports.updateStaff = (req, res) => {
    const { staff_id, name, email, contact_number, position, flight_assigned, employee_since, salary } = req.body;
    Staff.updateStaff(staff_id, name, email, contact_number, position, flight_assigned, employee_since, salary, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update staff', error: err });
        } else {
            res.json({ message: 'Staff updated successfully' });
        }
    });
}

exports.updateStaffPosition = (req, res) => {
    const { staff_id, position } = req.body;
    Staff.updateStaffPosition(staff_id, position, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update staff position', error: err });
        } else {
            res.json({ message: 'Staff position updated successfully' });
        }
    });
}

exports.updateStaffSalary = (req, res) => {
    const { staff_id, salary } = req.body;
    Staff.updateStaffSalary(staff_id, salary, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update staff salary', error: err });
        } else {
            res.json({ message: 'Staff salary updated successfully' });
        }
    });
}

exports.updateStaffFlightAssigned = (req, res) => {
    const { staff_id, flight_assigned } = req.body;
    Staff.updateStaffFlightAssigned(staff_id, flight_assigned, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update staff flight assigned', error: err });
        } else {
            res.json({ message: 'Staff flight assigned updated successfully' });
        }
    });
}

exports.updateStaffEmail = (req, res) => {
    const { staff_id, email } = req.body;
    Staff.updateStaffEmail(staff_id, email, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update staff email', error: err });
        } else {
            res.json({ message: 'Staff email updated successfully' });
        }
    });
}

exports.updateStaffContactNumber = (req, res) => {
    const { staff_id, contact_number } = req.body;
    Staff.updateStaffContactNumber(staff_id, contact_number, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update staff contact number', error: err });
        } else {
            res.json({ message: 'Staff contact number updated successfully' });
        }
    });
}

exports.updateStaffEmailAndContactNumber = (req, res) => {
    const { staff_id, email, contact_number } = req.body;
    Staff.updateStaffEmailAndContact(staff_id, email, contact_number, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update staff email and contact number', error: err });
        } else {
            res.json({ message: 'Staff email and contact number updated successfully' });
        }
    });
}

exports.removeStaff = (req, res) => {
    const { staffId } = req.params;
    Staff.removeStaff(staffId, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to remove staff', error: err });
        } else {
            res.json({ message: 'Staff removed successfully' });
        }
    });
}
