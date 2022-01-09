'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        lastname: 'Doe',
        firstname:  'John',
        email: 'demo@demo.com',
        username: 'johnD',
        githubLink: "testLink",
        role: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};