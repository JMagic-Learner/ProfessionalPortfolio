const router = require('express').Router();
const { Applications } = require('../models');

router.get('/' , async (req, res) => {
res.render('homepage');
});

router.get('/bio' , async (req,res) => {
res.render('bio');
});

router.get('/projects', async (req,res) => {
try {
    const applicationData = await Applications.findAll({});
    const application = applicationData.map((applications) => applications.get({plain: true }));
    res.render('projects', {
        application
    });
} catch (err) {
    res.status(500).json(err);
}


});

module.exports = router;