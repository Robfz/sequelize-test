'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Roberto',
        lastName: 'Fierros',
        email: 'robfz729@gmail.com',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        firstName: 'Bill',
        lastName: 'Gates',
        email: 'bill@microsoft.com',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
