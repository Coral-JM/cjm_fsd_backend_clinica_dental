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
  await queryInterface.bulkInsert('Roles', [
    {
      id: 1,
      name: "Patient", 
      createdAt: "2023-06-10 00:00:00", 
      updatedAt: "2023-06-10 00:00:00"
    },
    {
      id: 2,
      name: "Doctor", 
      createdAt: "2023-06-10 00:00:00", 
      updatedAt: "2023-06-10 00:00:00"
    },
    {
      id: 3,
      name: "Admin", 
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
