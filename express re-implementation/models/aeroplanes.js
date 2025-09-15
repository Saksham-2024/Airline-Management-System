const db = require('../configs');

const Aeroplanes = {
    //GET (SEARCH ALL)
    getAll: (callback) => {
        const query = `Select * from Aeroplanes`;
        db.query(query, callback);
    },

    //GET (SEARCH SPECIFIC)
    getByID: (aeroplane_id, callback ) => {
        const query = `Select * from Aeroplanes where aeroplane_id = ?`;
        db.query(query, [aeroplane_id], callback);
    },

    //POST (ADD)
    addAeroplane: (aeroplane_id, manufacturer, manufacturing_date, retirement_date, current_status, callback) => {
        const query = `Insert into Aeroplanes (aeroplane_id, manufacturer, manufacturing_date, retirement_date, current_status) values (?, ?, ?, ?, ?)`;
        db.query(query, [aeroplane_id, manufacturer, manufacturing_date, retirement_date, current_status], callback);
    },

    //PUT
    updateAeroplane: (aeroplane_id, manufacturer, manufacturing_date, retirement_date, current_status, callback) => {
        const query = `Update Aeroplanes set manufacturer = ?, manufacturing_date = ?, retirement_date = ?,  current_status = ? where aeroplane_id = ?`;
        db.query(query, [manufacturer, manufacturing_date, retirement_date, current_status, aeroplane_id], callback);
    },


    //SHOULD REQUIRE ADMIN PRIVILEGES
    //PATCH (UPDATE SPECIFIC)
    updateAeroplaneStatus: (aeroplane_id, current_status, callback) => {
        const query = `Update Aeroplanes set current_status = ? where aeroplane_id = ?`;
        db.query(query, [current_status, aeroplane_id], callback);
    },

    //DELETE
    removeAeroplane: (aeroplane_id, callback) => {
        const query = `Delete from Aeroplanes where aeroplane_id = ?`;
        db.query(query, [aeroplane_id], callback);
    }
};

module.exports = Aeroplanes;
// This module provides methods to interact with the Aeroplanes table in the database.
// It includes methods for retrieving all aeroplanes, searching for specific aeroplanes,
// adding new aeroplanes, updating existing aeroplanes, updating aeroplane status, and removing aeroplanes.
// Note: The `aeroplane_id` is a unique identifier for each aeroplane.
