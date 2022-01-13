const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const mealsController = require("../controllers/meal");

router.get('/', mealsController.index);
router.post('/', mealsController.create);
router.get('/:meal',  mealsController.show);
router.get('/:meal/:brand',  mealsController.showFromBrand);

module.exports = router;
