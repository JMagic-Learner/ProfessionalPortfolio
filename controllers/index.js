const router = require('express').Router();
const apiRoutes = require('./api');
const frontRoutes = require('./frontRoutes')

router.use('/api', apiRoutes);
router.use('/' , frontRoutes);

module.exports = router;