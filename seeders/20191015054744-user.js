'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@gmail.com',
        password: 'rahasia',
        username: 'Ademin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'jhon.doe@gmail.com',
        password: 'secret',
        username: 'Jhon Doe',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
