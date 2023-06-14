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

appointmentController.deleteMyAppointment = async (req, res) => {
    try {
    
    const appointmentId = req.params.id;
    const userId=req.userId;
    const deleteAppointment = await Appointments.destroy(
        {
            where: 
            { 
                id: appointmentId,
                user_id : userId,
            }
        })
    
            return res.json(
                {
                    success: true,
                    message: "Appointment succesfully deleted",
                    data: deleteAppointment
                }
            );
        
    
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong trying to delete your appointment",
            error: error.message
        })
    }
    
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

appointmentController.getMyAppointmentsAsDoctor = async (req, res) => {
    try {
        const doctorId= req.doctorId;
        const appointments = await Appointments.findAll(
            {
                where: {
                    doctor_id: doctorId
                },
                include: [
                    {
                        model: Service,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        }
                    },
                    
                    {
                        model: User,
                        attributes: {
                            exclude: ["password", "role_id", "createdAt", "updatedAt"]
                        }
                    },
                    {
                    model: Doctor,
                        attributes: {
                            exclude: ["collegiate_num", "user_id", "createdAt", "updatedAt"],
                    },
                    include: {
                        model:User,
                        attributes: {
                            exclude: ["password", "role_id", "createdAt","updatedAt",  "address"]
                        }
                    } 
                }
            ],
                    attributes: {
                        exclude: ["user_id", "doctor_id", "service_id", "createdAt","updatedAt"],
                }
            }
            
        )

        return res.json(
            {
            success: true,
            message: "My appointments as Doctor sucessfully retieved",
            data: appointments
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get all appointments as user doctor",
            error: error.message
        })
    }
}



module.exports = appointmentController;