'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Soin extends Model {
    static associate(models) {
      this.belongsTo(models.Animal, { as: "animal" });
    }
  }
  Soin.init(
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
      animalId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        references: {
          model: "Animals",
          key: "id",
        },
      },
      categorie: DataTypes.STRING,
      libelle: DataTypes.STRING,
      information: DataTypes.STRING(1000),
      date: DataTypes.DATE,
      document: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Soin',
      tableName: 'Soins',
    }
  );
  return Soin;
};