const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require("../controllers/user");

router.get('/', userController.index);
router.post('/', userController.create);
router.get('/:userId',  userController.show);

module.exports = router;
