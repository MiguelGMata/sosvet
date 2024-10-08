'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Assureurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animalId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Animals",
          key: "id"
        }
      },
      nomContrat: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nomAssureur: {
        allowNull: false,
        type: Sequelize.STRING
      },
      emailAssureur: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numeroContrat: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telephone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Assureurs');
  }
};