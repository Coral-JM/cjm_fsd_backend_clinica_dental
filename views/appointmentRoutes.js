const appointmentController = require('../controllers/appointmentController');
// const auth = require('../middleware/verifyToken');
// const isAdmin = require('../middleware/isAdmin');
// const isDoctor = require('../middleware/isDoctor');

const router = require('express').Router();

router.get('/user', appointmentController.getAppointmentsByuserId);
router.post('/appointments', appointmentController.createAppointments);
router.put('/appointments', appointmentController.updateMyAppointment);
router.delete('/appointments', appointmentController.deleteMyAppointment);



// router.get('/doctor', appointmentController.getAllAppointmentsAsDoctor);


module.exports = router;