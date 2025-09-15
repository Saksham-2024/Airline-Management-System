const Aeroplanes = require('../models/aeroplanes');

exports.getAllAeroplanes = (req, res) => {
    Aeroplanes.getAll((err, results) => {
        if (err) {
        res.status(500).json({ message: 'Database error', error: err });
        } else {
        res.json(results);
        }
    });
}

exports.getAeroplaneById = (req, res) => {
    const { aeroplaneId } = req.params;
    Aeroplanes.getByID(aeroplaneId, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error', error: err });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Aeroplane not found' });
        } else {
            res.json(results[0]);
        }
    });
}

exports.addAeroplane = (req, res) => {
    const { aeroplane_id, manufacturer, manufacturing_date, retirement_date, current_status} = req.body;
    Aeroplanes.addAeroplane(aeroplane_id, manufacturer, manufacturing_date, retirement_date, current_status, (err, result) => {
        if (err){
            res.status(500).json({ message: 'Failed to add aeroplane', error: err });
        }
        else {
            res.status(201).json({ message: 'Aeroplane added successfully', aeroplaneId: result.insertId });
        }
    });
}

exports.updateAeroplane = (req, res) => {
    const { aeroplane_id, manufacturer, manufacturing_date, retirement_date, current_status } = req.body;
    Aeroplanes.updateAeroplane(aeroplane_id, manufacturer, manufacturing_date, retirement_date, current_status, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update aeroplane', error: err });
        } else {
            res.json({ message: 'Aeroplane updated successfully' });
        }
    });
}

exports.updateAeroplaneStatus = (req, res) => {
    const { aeroplane_id, current_status } = req.body;
    Aeroplanes.updateAeroplaneStatus(aeroplane_id, current_status, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to update aeroplane status', error: err });
        } else {
            res.json({ message: 'Aeroplane status updated successfully' });
        }
    });
}

exports.removeAeroplane = (req, res) => {
    const {aeroplaneId} = req.params;
    Aeroplanes.removeAeroplane(aeroplaneId, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to remove aeroplane', error: err });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Aeroplane not found' });
        } else {
            res.json({ message: 'Aeroplane removed successfully' });
        }
    });
}
