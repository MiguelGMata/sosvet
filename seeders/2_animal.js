'use strict';

const vet = require('../seeds/animal')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Animals", vet("Animals"), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Animals', null, {});
    }
};