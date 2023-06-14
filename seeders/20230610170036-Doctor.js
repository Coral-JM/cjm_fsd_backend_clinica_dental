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
    await queryInterface.bulkInsert('Doctors', [
      {
        id: 1,
        collegiate_num: 111111111, 
        user_id: 1,
        createdAt: "2023-06-10 00:00:00", 
        updatedAt: "2023-06-10 00:00:00"
      },
      {
        id: 2,
        collegiate_num: 222222222, 
        user_id: 2,
        createdAt: "2023-06-10 00:00:00", 
        updatedAt: "2023-06-10 00:00:00"
      },
    ],
    {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
