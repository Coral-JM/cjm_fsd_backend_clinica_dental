const appointmentController = require('../controllers/appointmentController');
const auth = require('../middlewares/verifyToken');
const isDoctor = require('../middlewares/isDoctor');
// const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();

router.get('/appointments/appointmentsasuser', auth, appointmentController.getAppointmentsByuserId);
//Habrá que poner el auth
router.post('/appointments/createappointment', auth, appointmentController.createAppointments);
//Esto ha sido modificado. Se ha eliminado el auth
router.put('/appointments/appointmentsasuser', auth, appointmentController.updateMyAppointment);
//Esto ha sido modificado. Se ha eliminado el auth
router.delete('/appointments/:id', auth,  appointmentController.deleteMyAppointment);
router.get('/appointments/doctor/allappointments', appointmentController.getMyAppointmentsAsDoctor);
//Esto está cambiado para que funcione la ruta en front correctamente. Faltará añadir los middlewares para que funcione con rdx 

//(router.get('/appointments/doctor/allappointments', auth, isDoctor, appointmentController.getMyAppointmentsAsDoctor);)

module.exports = router;