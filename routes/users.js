const express = require("express")
const router = express.Router();
const UserController = require("../controllers/users_controller")

router.post('/', UserController.create);

module.exports = router;~