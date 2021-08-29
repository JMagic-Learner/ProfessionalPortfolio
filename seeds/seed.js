
const { Applications , User} = require('../models');

const seedApplications = require('./applications-seed');
const seedUser = require('./userData');

const sequelize = require('../config/connection');

const seeding = async () => {
    await sequelize.sync({ force:true});
    console.log('\n-----SYNCING THE DATABASE ----- \n');


    await seedApplications();
    await seedUser();
    console.log('\n----- APPLICATIONS SEEDED -----\n');
    console.log('\n----- EXITING seeding -----\n');
    process.exit(0);
}

seeding();