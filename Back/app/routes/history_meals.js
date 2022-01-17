const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const historyMealsController = require("../controllers/history_meals");

router.get('/',auth, historyMealsController.index);
router.post('/',auth, historyMealsController.create);
router.get('/:timestamp',auth, historyMealsController.showByTimestamp);
router.put('/:timestamp',auth, historyMealsController.updateByTimestamp);

module.exports = router;
