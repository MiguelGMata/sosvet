'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {  //changer A mayus
    static associate(models) {
      this.belongsTo(models.User, { as: "user" });
      this.hasMany(
        models.Assureur, {
        foreignKey: "animalId",
      },
        models.Soin, {
        foreignKey: "animalId",
      }
      );
    }
  }
  Animal.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Users",
          key: "id",
        },
      },
      nom: DataTypes.STRING,
      espece: DataTypes.STRING,
      race: DataTypes.STRING,
      couleur: DataTypes.STRING,
      sexe: DataTypes.STRING,
      poids: DataTypes.STRING,
      sterilisation: DataTypes.STRING,
      information: DataTypes.STRING,
      date_naissance: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Animal',
      tableName: 'Animals',
    }

  );
  return Animal;
};