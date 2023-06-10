const router = require('express').Router();
const authRoutes = require('./views/authRoutes');
const serviceRoutes = require('./views/serviceRoutes');


router.use('/auth', authRoutes);
router.use('/services', serviceRoutes);


module.exports = router;