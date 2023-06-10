const userController = {};

userController.getAllUsers = (req, res) => {return res.send('Get all users')}
userController.createUsers = (req, res) => {return res.send('Create users')}

module.exports = userController;