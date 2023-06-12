const { User, Doctor, Service, Appointments } = require("../models")
const bcrypt = require('bcrypt');

const appointmentController = {};

appointmentController.createAppointments = async (req, res) => {
    
    try {

        const { service_id, user_id, doctor_id, comments} = req.body;
        console.log(req.body);
        const newAppointment = await Appointments.create(
            {
                service_id: service_id,
                user_id: user_id,
                doctor_id: doctor_id,
                comments: comments
            }
        )
        return res.json(
            {
                success: true,
                message: "Appointment succesfully created",
                data: newAppointment
            });

    } catch (error) {
            return res.status(500).json(
                {
                success: false,
                message: "Somenthing went wrong with your appointment",
                error: error.message
                }
            )
        }
}

appointmentController.getAppointmentsByuserId = async (req, res) => {
    
    try {
        const userId = req.body.user_id

        const getAppointmentsByUserId = await Appointments.findAll(
            {
                where: {
                    user_id : userId
                },
            
                include: [
                    {
                        model: Service,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        }
                    },
            
                    {
                        model: Doctor,
                        attributes: {
                            exclude: ["user_id", "createdAt", "updatedAt"],
                        }
                    },
                    {
                        model: User,
                        attributes: {
                            exclude: ["password", "role_id", "createdAt","updatedAt"]
                            }
                 
                    }
            ],
                //     attributes: {
                //         exclude: ["user_id", "doctor_id", "service_id", "comments", "createdAt","updatedAt"],
                // }
            }
            
        )
        console.log(getAppointmentsByUserId);
        return res.json(
            {
            success: true,
            message: "Appointment succesfully retrieved",
            data: getAppointmentsByUserId
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get the appointment by Id",
            error: error.message
        })
    }
}



module.exports = appointmentController;