const express = require("express");
const router = express.Router();
const managerController = require('../controllers/Manager')

router.get('/', managerController.getAllManagers);
router.get('/:id', managerController.getManagerById);
router.post('/', managerController.createManager);
router.put('/:id', managerController.updateManager);
router.delete('/:id', managerController.deleteManager);

module.exports = router;