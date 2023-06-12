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
                data: user
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

module.exports = userController;