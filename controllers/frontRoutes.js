const router = require('express').Router();
const { Applications } = require('../models');
const withAuth = require('../utils/auth');

router.get('/' , async (req, res) => {
res.render('homepage');
});

router.get('/profile' , async (req,res) => {
res.render('profile');
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


router.get('/submission',  async (req,res) => {
    try {
        const applicationData = await Applications.findAll({});
        const application = applicationData.map((applications) => applications.get({plain: true }));
        res.render('submission', {
            application
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
    
    });
module.exports = router;