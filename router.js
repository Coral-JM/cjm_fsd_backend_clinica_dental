const router = require('express').Router();
const authRoutes = require('./views/authRoutes');
const userRoutes = require ('./views/userRoutes');
const appointmentRoutes = require ('./views/appointmentRoutes')



router.use('/', authRoutes);
router.use('/', userRoutes);
router.use('/', appointmentRoutes);


module.exports = router;