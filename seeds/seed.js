
const { Applications } = require('../models');
const seedApplications = require('./applications-seed');

const sequelize = require('../config/connection');

const seeding = async () => {
    await sequelize.sync({ force:true});
    console.log('\n-----SYNCING THE DATABASE ----- \n');


    await seedApplications();
    console.log('\n----- APPLICATIONS SEEDED -----\n');
    console.log('\n----- EXITING seeding -----\n');
    process.exit(0);
}

seeding();