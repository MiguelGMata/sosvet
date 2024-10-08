'use strict';

const vet = require('../seeds/veterinaires')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Veterinaires", vet("Veterinaires"), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Veterinaires', null, {});
    }
};