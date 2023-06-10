const serviceController = require('../controllers/serviceController');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

const isAdmin = require('../middlewares/isAdmin')

router.post('/', auth, isAdmin, serviceController.createService)

module.exports = router;