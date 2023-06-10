const { Service } = require("../models");
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

module.exports = serviceController;