const router = require('express').Router();
const userRoutes = require('./UserRoutes');
//const homeRoutes = require('../homeRoutes');

router.use('/users', userRoutes);
module.exports = router;