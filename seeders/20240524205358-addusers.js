'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('users', [{
      email: "ya@gmail.com",
      gender: "p",
      password: "apa12",
      role: "main"
    }],
    {
      email: "ga@gmail.com",
      gender: "l",
      password: "oke3",
      role: "main"
    }
  );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
