'use strict';

const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'admin@example.com',
        password: await bcrypt.hash('password123', 10),
        type: 'admin',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user@example.com',
        password: await bcrypt.hash('password123', 10),
        type: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user2@example.com',
        password: await bcrypt.hash('password123', 10),
        type: 'user',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'admin2@example.com',
        password: await bcrypt.hash('adminpassword', 10),
        type: 'admin',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
