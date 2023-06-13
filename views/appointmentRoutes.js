const appointmentController = require('../controllers/appointmentController');
const auth = require('../middlewares/verifyToken');
// const isAdmin = require('../middleware/isAdmin');
// const isDoctor = require('../middleware/isDoctor');

const router = require('express').Router();

router.get('/user', auth, appointmentController.getAppointmentsByuserId);
router.post('/appointments', auth, appointmentController.createAppointments);
router.put('/:id', auth, appointmentController.updateMyAppointment);
router.delete('/:id', auth,  appointmentController.deleteMyAppointment);



// router.get('/doctor', appointmentController.getAllAppointmentsAsDoctor);


module.exports = router;