
const userController = require ('../controllers/userController');
const router = require('express').Router();

const auth = require('../middlewares/verifyToken');
// const isAdmin = require('../middleware/isAdmin');
// const isDoctor = require('../middleware/isDoctor');

//Endpoints CRUD


router.get("/myuser", auth, userController.getMyUser);
router.put("/myuser", auth, userController.updateMyUser);

//router.get("/", auth, userController.getAllUsers);
// router.get("/", auth, isDoctor, userController.getAllUsersAsDoctor);

module.exports = router;