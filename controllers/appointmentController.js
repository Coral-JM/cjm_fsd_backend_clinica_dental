const appointmentController = {};

appointmentController.getAppointments = (req, res) => {
    return res.send('Get appointments')
}
appointmentController.createAppointments = (req, res) => {
    return res.send('Create appointments')
}

module.exports = appointmentController;