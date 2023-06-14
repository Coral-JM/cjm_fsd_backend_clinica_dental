
const userController = require ('../controllers/userController');
const router = require('express').Router();

const auth = require('../middlewares/verifyToken');
const isDoctor = require('../middlewares/isDoctor');



router.get("/myuser", auth, userController.getMyUser);
router.put("/myuser", auth, userController.updateMyUser);
router.get("/", auth, isDoctor, userController.getAllUsersAsDoctor);



module.exports = router;