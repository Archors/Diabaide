const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const historyMealsController = require("../controllers/history_meals");

router.get('/', historyMealsController.index);
router.post('/', historyMealsController.create);
router.get('/:timestamp', historyMealsController.showByTimestamp);

module.exports = router;
