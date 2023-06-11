const router = require('express').Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/verifyToken')

router.post ('/register', authController.register);
router.post ('/login', auth, authController.login);

module.exports = router;
