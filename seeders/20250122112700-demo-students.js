'use strict';

const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
      {
        dni: '87654321B',
        name: 'John',
        last_name: 'Smith',
        date_of_birth: new Date(2000, 0, 1),
        teacher_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dni: '12345678A',
        name: 'Jane',
        last_name: 'Doe',
        date_of_birth: new Date(2001, 0, 1),
        teacher_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dni: '98765432C',
        name: 'Bob',
        last_name: 'Johnson',
        date_of_birth: new Date(2002, 0, 1),
        teacher_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
