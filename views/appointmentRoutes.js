const appointmentController = require('../controllers/appointmentController');
const auth = require('../middlewares/verifyToken');
// const isAdmin = require('../middleware/isAdmin');
// const isDoctor = require('../middleware/isDoctor');

const router = require('express').Router();

router.get('/appointments', auth, appointmentController.getAppointmentsByuserId);
router.post('/appointments', auth, appointmentController.createAppointments);
router.put('/appointments/:id', auth, appointmentController.updateMyAppointment);
router.delete('/appointments/:id', auth,  appointmentController.deleteMyAppointment);


router.get('/appointments/doctor', appointmentController.getAllAppointmentsAsDoctor);


module.exports = router;