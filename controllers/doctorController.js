const doctorController = {};

doctorController.getDoctors = (req, res) => {
    return res.send('Get doctors')
};
doctorController.createDoctors = (req, res) => {
    return res.send('Create doctors')
};

module.exports = doctorController;