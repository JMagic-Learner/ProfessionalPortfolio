const { Applications } = require('../models');

const applicationData = [
    {
        application_name: 'Timed - Quiz',
        link: 'https://jmagic-learner.github.io/Timed-Quiz',
        description: ' Come test your knowledge of coding with this simple application'
    },
    {
        application_name: 'Horiseon - Code Retraction',
        link: 'https://jmagic-learner.github.io/Code-Refractor---UWBootCamp/',
        description: ' An coding exercise that is demonstrates coding standards'
    },
    {
        application_name: 'Day - Planner',
        link: 'https://jmagic-learner.github.io/Day-Planner',
        description: 'Demonstrates front end usage of third party api.'
    },
    {
        application_name: 'Weather - Forecaster',
        link: 'https://jmagic-learner.github.io/Weather_App/',
        description: 'Using OpenWeather API, I feed forecast data into a front-end UI. This front end UI also allows user interactivity for API searching'
    },
    {
        application_name: 'Password - Generator',
        link: 'https://jmagic-learner.github.io/Password-Generator/',
        description: 'Using for and while loops, we use user input/constraints to autogenerate passwords'
    },
    {
        application_name: 'Project 1 - Life Organizer',
        link: 'https://mohamedmesahel.github.io/Calendar/main.html/',
        description: 'A coding project that utilizes third party API, a CSS bundle, and other front end utilities'
    },
    {
        application_name: 'Pro-ReadMe Generator',
        link: 'https://jmagic-learner.github.io/ProReadMe-Gen',
        description: 'Auto generate a readme file through usage of NPM Inquirer'
    },
    {
        application_name: 'Write Some Notes',
        link: 'https://jmagic-learner.github.io/Write_Some_Notes/',
        description: 'As a business owner, you want to be able to take down some notes for your everyday processes.'
    },
    {
        application_name: 'Employee_Profile',
        link: 'https://jmagic-learner.github.io/Employee_Profile/',
        description: 'Work through a front end ui that displays the relationships of a team'
    },
    {
        application_name: 'Ecommerce-Infrastructure',
        link: 'https://jmagic-learner.github.io/ECommerce-Infrastructure/',
        description: 'Given a pre-existing file structure of a backend server, I connected the dots to popupate front end UI with data'
    },
    {
        application_name: 'Project 2 - playlistify',
        link: "https://playlistify-pod3.herokuapp.com/",
        description: 'An application where you can add / search/ find songs/albums etc through the spotify API'
    },
    {
        application_name: 'ReadMe-Generator',
        link: "https://github.com/JMagic-Learner/ProReadMe-Gen.git",
        description: 'Generate a readme by following inquirer prompts'
    },
    {
        application_name: 'Employee_Tracker',
        link: "https://jmagic-learner.github.io/Employee_Tracker/",
        description: 'Browse the SCP foundation database of employees'
    }
];

const seedApplications = () => Applications.bulkCreate(applicationData);

module.exports = seedApplications;