const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const historyGlycemiaController = require("../controllers/history_glycemias");

router.get('/',auth, historyGlycemiaController.index);
router.post('/',auth, historyGlycemiaController.create);
router.get('/:timestamp',auth, historyGlycemiaController.showByTimestamp);
router.delete('/',auth, historyGlycemiaController.delete);

module.exports = router;
