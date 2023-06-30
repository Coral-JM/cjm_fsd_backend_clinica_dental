const { User } = require("../models");
const bcrypt = require('bcrypt');

const userController = {};

userController.getMyUser = async(req,res) => {
    try {
        const user = await User.findByPk(req.userId);
        return res.json(

            {
                success: true,
                message: "User succesfully retrieved",
                user: user
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong",
                error: error.message
            }
        );
    }
}

userController.updateMyUser = async(req,res) => {
    try {
        const userId = req.userId
        const {name, email, password} = req.body;
        const newPassword = bcrypt.hashSync(password, 10);
        const updateUser = await User.update(
            {
                name: name,
                email: email,
                password: newPassword,
            }, 

            {
                where: {
                    id : userId,
                },
            });
        
            if (!updateUser) {
                return res.send('User profile not updated')
            }

        return res.json(
            {
            success: true,
            message: "User profile succesfully updated",
            data: updateUser
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to update your profile",
            error: error.message
        })
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////

// GET ALL USERS AS A DOCTOR //
userController.getAllUsersAsDoctor = async (req, res) => {
    try {
        const users = await User.findAll(
            {
                where:{
                    role_id : 1
                },
            attributes: {
                exclude: ["password", "createdAt","updatedAt", "role_id"],
        }
    }
        );
        return res.json(
            {
            success: true,
            message: "All Registered Users succesfully retrieved as user doctor",
            data: users
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get all registered users as user doctor",
            error: error.message
        })
    }
}
module.exports = userController;