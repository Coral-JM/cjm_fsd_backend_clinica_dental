
const userController = require ('../controllers/userController');
const router = require('express').Router();

// const verifyToken = require('../middleware/verifyToken');
// const isAdmin = require('../middleware/isAdmin');
// const isDoctor = require('../middleware/isDoctor');
// const verifyUserChanges = require('../middleware/verifyUserChanges');

//Endpoints CRUD


router.get("/myuser", userController.getMyUser);
router.put("/myuser", userController.updateMyUser);

//router.get("/", verifyToken, userController.getAllUsers);
// router.get("/", verifyToken, isDoctor, userController.getAllUsersAsDoctor);

module.exports = router;