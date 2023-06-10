const serviceController = require('../controllers/serviceController');
const auth = require('../middlewares/verifyToken');

const router = require('express').Router();

router.post('/', auth, serviceController.createService)

module.exports = router;