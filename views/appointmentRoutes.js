const appointmentController = require('../controllers/appointmentController');
const isDoctor = require('../middleware/isDoctor');
const verifyToken = require('../middleware/verifyToken');
const verifyAppointmentChanges = require('../middleware/verifyAppointmentChanges');
const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();

router.get('/user', verifyToken, appointmentController.getAppointmentsByuserId);
router.get('/doctor', verifyToken, isDoctor, appointmentController.getAllAppointmentsAsDoctor);
router.post('/', verifyToken, appointmentController.createAppointments);
router.put('/', verifyToken, verifyAppointmentChanges, appointmentController.updateMyAppointment);
router.delete('/',verifyToken, appointmentController.deleteMyAppointment);



module.exports = router;