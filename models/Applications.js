
var DataTypes = require('sequelize/lib/data-types');
const {Model , Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class Applications extends Model {}

Applications.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false,
        },
        application_name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull:false
        },
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'applications'
    }
);

module.exports = Applications;

