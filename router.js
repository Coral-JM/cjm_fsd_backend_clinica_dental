const router = require('express').Router();
const authRoutes = require('./views/authRouter');


const usersRouter = require ('./views/usersRouter');
const servicesRouter= require ('./views/servicesRouter');

router.use('/services', servicesRouter);
router.use('/users', usersRouter);

module.exports = router;