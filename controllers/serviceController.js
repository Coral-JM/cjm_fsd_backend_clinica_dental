const { Service } = require("../models");
const authController = require('./authController');
const serviceController = {};

serviceController.createService = async(req, res) => {
    try {
        const { name, description } = req-body;

        const newService = await Service.create(
            {
                name: name,
                description
            }
        )
        return res.json({
            success: true,
            message: "Service created",
            data: newService
        })
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: "Service can't be created",
            error: error
        }
        )
        
    }
}

serviceController.updateService = async(req, res) => {
    try {
        const serviceId = req.params.id;
        const service = await Service.findbyPk(serviceId);

        if (!service) {
            return res.json({
                success: true, 
                message: "Service doesn't exist"
            })
        }
        const { name, description } = req.body;
        const serviceUpdated = await Service.update(
            {
                name: name, 
                description: description
            },
            {
                where: { id: serviceId}
            })
            return res.json({
                success: true,
                message: "Service updated",
                data: serviceUpdated
            })
    } catch (error) {
        
    }
}

module.exports = serviceController;