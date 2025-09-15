const db = require('../configs');

const Staff = {
    //GET (ALL STAFF)
    getAll: (callback) => {
        const query = `Select * from Staff`;
        db.query(query, callback);
    },

    //GET (SEARCH BY ID)
    getByID: (staff_id, callback) => {
        const query = `Select * from Staff where staff_id = ?`;
        db.query(query, [staff_id], callback);
    },

    //GET (SEARCH BY NAME)
    getByName: (name, callback) => {
        const query = `Select * from Staff where name like ?`;
        db.query(query, [`%${name}%`], callback);
    },

    //GET (SEARCH BY ROLE/POSITION)
    getByPosition: (position, callback) => {
        const query = `Select * from Staff where position = ?`;
        db.query(query, [position], callback);
    },

    //GET (SEARCH BY FLIGHT ASSIGNED)
    getByFlightAssigned: (flight_assigned, callback) => {
        const query = `Select * from Staff where flight_assigned = ?`;
        db.query(query, [flight_assigned], callback);
    },

    //POST (ADD STAFF)
    addStaff: (staff_id, name, email, contact_number, position, flight_assigned, employee_since, salary, callback) => {
        const query = `Insert into Staff (staff_id, name, email, contact_number, position, flight_assigned, employee_since, salary) values (?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [staff_id, name, email, contact_number, position, flight_assigned, employee_since, salary], callback);
    },
    
    // SHOULD REQUIRES ADMIN PRIVILEGES
    //PUT (UPDATE STAFF DETAILS)
    updateStaff: (staff_id, name, email, contact_number, position, flight_assigned, employee_since, salary, callback) => {
        const query = `Update Staff set name = ?, email = ?, contact_number = ?, position = ?, flight_assigned = ?, employee_since = ?, salary = ? where staff_id = ?`;
        db.query(query, [name, email, contact_number, position, flight_assigned, employee_since, salary, staff_id], callback);
    },

    //PATCH (UPDATE STAFF POSITION)
    updateStaffPosition: (staff_id, position, callback) => {
        const query = `Update Staff set position = ? where staff_id = ?`;
        db.query(query, [position, staff_id], callback);
    },

    // PATCH (UPDATE STAFF SALARY)
    updateStaffSalary: (staff_id, salary, callback) => {
        const query = `Update Staff set salary = ? where staff_id = ?`;
        db.query(query, [salary, staff_id], callback);
    },

    //PATCH (UPDATE STAFF FLIGHT ASSIGNED)
    updateStaffFlightAssigned: (staff_id, flight_assigned, callback) => {
        const query = `Update Staff set flight_assigned = ? where staff_id = ?`;
        db.query(query, [flight_assigned, staff_id], callback);
    },

    //PATCH (UPDATE STAFF EMAIL)
    updateStaffEmail: (staff_id, email, callback) => {
        const query = `Update Staff set email = ? where staff_id = ?`;
        db.query(query, [email, staff_id], callback);
    },

    //PATCH (UPDATE STAFF CONTACT NUMBER)
    updateStaffContactNumber: (staff_id, contact_number, callback) => {
        const query = `Update Staff set contact_number = ? where staff_id = ?`;
        db.query(query, [contact_number, staff_id], callback);
    },  

    //PATCH (UPDATE BOTH EMAIL AND CONTACT NUMBER)
    updateStaffEmailAndContact: (staff_id, email, contact_number, callback) => {
        const query = `Update Staff set email = ?, contact_number = ? where staff_id = ?`;
        db.query(query, [email, contact_number, staff_id], callback);
    },

    //DELETE (REMOVE STAFF)
    removeStaff: (staff_id, callback) => {
        const query = `Delete from Staff where staff_id = ?`;
        db.query(query, [staff_id], callback);
    }
};

module.exports = Staff;
// This module provides methods to interact with the Staff table in the database.
// It includes methods for retrieving all staff, searching for specific staff by ID, name, position, or flight assigned,
// adding new staff, updating existing staff details, updating staff position, salary, flight assigned, email, and contact number,
// and removing staff.
// Note: The `flight_assigned` in the Staff table is a foreign key that references the Flights table.
// The `staff_id` is a unique identifier for each staff member.