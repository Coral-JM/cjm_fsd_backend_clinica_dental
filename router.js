const router = require('express').Router();
// const authRoutes = require('./views/authRoutes');


const userRoutes = require ('./views/usersRoutes');
const serviceRoutes = require ('./views/servicesRoutes');
const appointmentRoutes = require ('./views/appointmentsRoutes');
const roleRoutes = require ('./views/rolesRoutes');

router.use('/services', serviceRoutes);
router.use('/users', userRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/roles', roleRoutes);


module.exports = router;