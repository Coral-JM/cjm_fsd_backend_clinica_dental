const authController = require('../controllers/authController')
const serviceController = require('../controllers/serviceController');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

const isAdmin = require('../middlewares/isAdmin')


router.post('/', auth, isAdmin, serviceController.createService);
router.put('/services/:id', serviceController.updateService);


module.exports = router;