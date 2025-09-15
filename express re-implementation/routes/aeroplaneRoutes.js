const express = require('express');
const router = express.Router();
const aeroplaneController = require('../controllers/aeroplaneController');

router.get('/', aeroplaneController.getAllAeroplanes);
router.get('/:aeroplaneId', aeroplaneController.getAeroplaneById);
router.post('/', aeroplaneController.addAeroplane);
router.put('/', aeroplaneController.updateAeroplane);
router.patch('/status', aeroplaneController.updateAeroplaneStatus);
router.delete('/:aeroplaneId', aeroplaneController.removeAeroplane);

module.exports = router;