const appointmentController = require('../controllers/appointmentController');
// const isDoctor = require('../middleware/isDoctor');
// const verifyToken = require('../middleware/verifyToken');
// const verifyAppointmentChanges = require('../middleware/verifyAppointmentChanges');
// const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();

router.get('/user', appointmentController.getAppointmentsByuserId);
router.post('/appoinments', appointmentController.createAppointments);
router.put('/appointments', appointmentController.updateMyAppointment);
router.delete('/appointments', appointmentController.deleteMyAppointment);



// router.get('/doctor', appointmentController.getAllAppointmentsAsDoctor);


module.exports = router;