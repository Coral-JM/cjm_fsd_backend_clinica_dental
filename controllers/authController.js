const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {};

authController.register = async (req, res) => {
    try {
        
        const {name, email, password} = req.body;
        const newPassword = bcrypt.hashSync(password, 10);

        console.log(newPassword)

        const newUser = await User.create(
            {
                name: name,
                email: email,
                password: newPassword,
                role_id: req.body.role_id || 1
            }
        )
        return res.json(
            {
            success: true,
            message: "Register was succesful",
            data: newUser
            });

    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong with Register",
                error: error.message
            })
    }
}

authController.login = async (req, res) => {
    try {

        const {email, password} = req.body;

        const user = await User.findOne(
            {
                where: {
                    email:email,
                }
            },
        );
        if(!user) {
            return res.status(500).json({
                success: false,
                message: "The email address or password is incorrect. Please try again.",
            }) 
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if(!isMatch) {
            return res.status(403).json({
                success: false,
                message: "The email address or password is incorrect. Please try again.",
            }) 
        }

        const token = jwt.sign(
            { 
                name: user.name,
                userId: user.id,
                email: user.email,
                roleId: user.role_id
            }, 
            'secreto', 

            { expiresIn: '2h' }  
        );

        return res.json(
            {
                success: true,
                message: "User logged",
                token: token
            }
        );
    } catch (error) {
        return res.status(403).json({
                success: false,
                message: "Somenthing went wrong with Login",
                error: error.message
            })
    }
}

module.exports = authController;