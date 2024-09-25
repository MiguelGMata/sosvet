'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class User extends Model {
        static associate(models) {
            this.hasMany(models.Animal, {
                foreignKey: "userId",
            });
        }
    }
    User.init(
        {
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User',

        }
    );
    return User;
};
