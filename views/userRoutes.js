
const userController = require ('../controllers/userController');
const router = require('express').Router();

const auth = require('../middlewares/verifyToken');
// const isDoctor = require('../middlewares/isDoctor');



router.get("/myuser/updateProfile", auth, userController.getMyUser);
router.put("/myuser/updateProfile", auth, userController.updateMyUser);
router.get("/allusers", userController.getAllUsersAsDoctor);

//Esta última ruta se ha modificado para poder acceder desde el front



module.exports = router;