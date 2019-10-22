'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@gmail.com',
        password: 'rahasia',
        username: 'Ademin',
        image :'https://via.placeholder.com/1080',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'irvan@gmail',
        password: 'irvan',
        username: 'Irvan',
        image :'https://via.placeholder.com/1080',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
