'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veterinaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Veterinaire.init({
    nom: DataTypes.STRING,
    adresse: DataTypes.STRING,
    postal: DataTypes.STRING,
    lieux: DataTypes.STRING,
    phone: DataTypes.STRING,
    pictures: DataTypes.STRING(1000),
  },
    {
      sequelize,
      modelName: 'Veterinaire',
    });
  return Veterinaire;
};
