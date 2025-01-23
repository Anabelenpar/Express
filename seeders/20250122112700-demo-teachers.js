'use strict';

const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teachers', [
    {
      dni: '12345678A',
      name: 'John',
      last_name: 'Doe',
      date_of_birth: new Date(1980, 0, 1),
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      dni: '98765432B',
      name: 'Jane',
      last_name: 'Smith',
      date_of_birth: new Date(1985, 0, 1),
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teachers', null, {});
  }
};
