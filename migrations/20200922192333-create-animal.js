'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Users",
          key: "id",
        }
      },

      nom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      espece: {
        allowNull: false,
        type: Sequelize.STRING
      },
      race: {
        allowNull: false,
        type: Sequelize.STRING
      },
      couleur: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sexe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      poids: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sterilisation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      information: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      date_naissance: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Animals');
  }
};