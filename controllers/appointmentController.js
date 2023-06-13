const { User, Doctor, Service, Appointments } = require("../models")
const bcrypt = require('bcrypt');

const appointmentController = {};

appointmentController.createAppointments = async (req, res) => {
    
    try {

        const { service_id, user_id, doctor_id, comments} = req.body;
        
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
//NO ME APLICA LOS CAMBIOS AL APPOINTMENT
appointmentController.updateMyAppointment = async (req, res) => {
    
    
    try {
        const userId = req.userId
        const appointmentId = req.params.id;
        const { comments } = req.body;
        console.log(req.userId)
        const updateAppointment = await Appointments.update(
            
            {comments: comments}, 

            {
                where: {
                    id: appointmentId,
                    user_id : userId,
                },
            });
            
        console.log(updateAppointment);
        return res.json(
            {
            success: true,
            message: "Appointment succesfully updated",
            data: updateAppointment
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to update the appointment",
            error: error.message
        })
    }
}


//NO FUNCIONA SE QUEDA PARADO
appointmentController.deleteMyAppointment = async (req, res) => {
    try {
        const appointmentId = req.body.id;
        const userId = req.userId;
        const appointment = await Appointments.findByPk(appointmentId);
            if(appointment){
                if(appointment.user_id === userId){ 
                    appointment.destroy();
                    return res.json(
                        {
                            success: true,
                            message: "Appointment succesfully deleted",
                            data: appointment
                        }
                    );
                } else {
                    return res.status(500).json({
                        success: false,
                        message: "Appointment selected doesn't exist or you don't have privileges to do that.",
                        error: error.message
                    })
                }
            }
        }catch(error){
            return res.status(500).json({
                success: false,
                message: "Something went wrong trying to delete your appointment",
                error: error.message
            })
        }
    
}


module.exports = appointmentController;