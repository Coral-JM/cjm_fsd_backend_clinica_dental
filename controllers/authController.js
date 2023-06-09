const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {};

authController.register = async (req, res) => {
    
    try {
        if (req.body.password.length < 4) {
            return res.send('Password must be longer than four characters')
        }
        const newPassword = bcrypt.hashSync(req.body.password, 8);

        const newUser = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: newPassword,
                role_id: 1
            }
        )
        return res.send(newUser);
    } catch (error) {
        return res.send('Somethign went wrong creating users' + error.message)
        
    }
}

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where : {
                email: email
            }
        })

        if (!user) {
            return res.json({
                success: true,
                message: "Wrong credentials"
        })
        }
        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.json({
                success: true,
                message: "Wrong credentials"
            })
            
        }
        const token = jwt.sign({
            userId: user.id,
            roleId: user.role_id,
            email: user.email
        },
        'secreto', { expiresIn: '2h'}
        );
        return res.json({
            success: true,
            message: "User Logged",
            token: token
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error
        })    
    }
}

module.exports = authController