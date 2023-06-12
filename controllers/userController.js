const { User } = require("../models");

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
        const user = req.User;
        const changes= req.body.changes;
        
        user.update(changes);
        user.save();
        return res.json(
            {
                success: true,
                message: "User succesfully updated",
                data: user
            }
        );
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

module.exports = userController;