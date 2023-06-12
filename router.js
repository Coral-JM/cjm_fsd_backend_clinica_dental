const router = require('express').Router();
const authRoutes = require('./views/authRoutes');


const userRoutes = require ('./views/userRoutes');
const appointmentRoutes = require ('./views/appointmentRoutes')
// const roleRoutes = require ('./views/roleRoutes');
// const doctorRoutes = require ('./views/doctorRoutes');
// const serviceRoutes = require ('./views/serviceRoutes');


router.use('/', authRoutes);
// router.use('/', serviceRoutes);
router.use('/', userRoutes);
router.use('/', appointmentRoutes);
// router.use('/', roleRoutes);
// router.use('/doctors', doctorRoutes);

module.exports = router;