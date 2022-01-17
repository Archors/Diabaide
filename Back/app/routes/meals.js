const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const mealsController = require("../controllers/meal");

router.get('/', auth, mealsController.index);
router.post('/', auth, mealsController.create);
router.get('/:meal',  auth, mealsController.show);
router.get('/:meal/:brand',  auth, mealsController.showFromBrand);

module.exports = router;
