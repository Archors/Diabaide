const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const historyGlycemieController = require("../controllers/history_glycemie");

router.get('/', historyGlycemieController.index);
router.post('/', historyGlycemieController.create);
router.get('/:timestamp', historyGlycemieController.showByTimestamp);

module.exports = router;
