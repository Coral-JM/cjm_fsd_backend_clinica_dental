const authController = require('../controllers/authController')
const serviceController = require('../controllers/serviceController');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

const isAdmin = require('../middlewares/isAdmin')



// router.get('/', serviceController.getServices);
// router.post('/', serviceController.createServices);


module.exports = router;