const router = require('express').Router();
// const authRoutes = require('./views/authRoutes');

const userRoutes = require ('./views/userRoutes');
const serviceRoutes = require ('./views/serviceRoutes');
const appointmentRoutes = require ('./views/appointmentRoutes');
const roleRoutes = require ('./views/roleRoutes');
const doctorRoutes = require ('./views/doctorRoutes');

router.use('/services', serviceRoutes);
router.use('/users', userRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/roles', roleRoutes);
router.use('/doctors', doctorRoutes);

module.exports = router;