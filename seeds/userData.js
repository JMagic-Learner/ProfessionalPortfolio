const { User } = require('../models');

const userData = [
  {
    name:"Jason Ma",
    email:"MaJason93@gmail.com",
    password:"portfolio"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;




