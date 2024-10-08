'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assureur extends Model {
    static associate(models) {
      this.belongsTo(models.Animal, { as: "animal" });
    }
  }
  Assureur.init(
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
      nomContrat: DataTypes.STRING,
      nomAssureur: DataTypes.STRING,
      emailAssureur: DataTypes.STRING(1000),
      numeroContrat: DataTypes.STRING,
      telephone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Assureur',
      tableName: 'Assureurs',
    }
  );
  return Assureur;
};
