const { User } = require("../models");
const bcrypt = require('bcrypt');

const userController = {};

userController.getMyUser = async(req,res) => {
    try {
        const user = await User.findByPk(req.userId);
        return res.json(
            //NO ME MUESTRA LOS CAMPOS DEL USER
            {
                success: true,
                message: "User succesfully retrieved",
                user: User
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
        const userId = req.body.user_id
        const {name, email} = req.body;
        const updateUser = await User.update(
            {
                name: name,
                email: email
            }, 

            {
                where: {
                    user_id : userId,
                },
            });
        
            if (!updateUser) {
                return res.send('User profile not updated')
            }

        return res.json(
            {
            success: true,
            message: "User profile succesfully updated",
            name: updateUser
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to update your profile",
            error: error.message
        })
    }
}

module.exports = userController;