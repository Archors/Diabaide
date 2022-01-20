const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require("../controllers/user");

router.get('/', userController.show);
router.post('/',userController.create);
router.put('/',userController.update);
router.put('/password',userController.updatePwd);
//router.get('/:userId', auth, userController.show);
module.exports = router;
