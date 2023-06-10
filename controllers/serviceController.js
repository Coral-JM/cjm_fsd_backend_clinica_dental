const serviceController = {};

serviceController.getServices = (req, res) => {
    return res.send('Services')
}
serviceController.createServices = (req, res) => {
    return res.send('Create Services')
}

module.exports = serviceController;