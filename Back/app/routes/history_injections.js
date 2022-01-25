const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const historyInjectionController = require("../controllers/history_injections");

router.get('/',auth, historyInjectionController.index);
router.post('/',auth, historyInjectionController.create);
router.get('/:timestamp',auth, historyInjectionController.showByTimestamp);
router.delete('/',auth, historyInjectionController.delete);

module.exports = router;
