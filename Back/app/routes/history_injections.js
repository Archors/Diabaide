const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const historyInjectionController = require("../controllers/history_injections");

router.get('/', historyInjectionController.index);
router.post('/', historyInjectionController.create);
router.get('/:timestamp', historyInjectionController.showByTimestamp);

module.exports = router;
