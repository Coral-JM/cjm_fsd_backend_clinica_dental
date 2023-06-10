const userController = require ('../controllers/userController');
const router = require('express').Router();


router.get("/", userController.getAllUsers);
router.post("/", userController.createUsers);

module.exports = router;