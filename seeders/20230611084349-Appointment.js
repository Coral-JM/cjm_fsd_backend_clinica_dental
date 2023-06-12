'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments', [
      {
        id: 1,
        service_id: 1,
        user_id: 2, 
        doctor_id: 1,
        comments: "15-06-2023 11:30",
        createdAt: "2023-06-10 00:00:00", 
        updatedAt: "2023-03-01 00:00:00"
      },
      {
        id: 2,
        service_id: 2,
        user_id: 2, 
        doctor_id: 2,
        comments: "15-06-2023 12:30",
        createdAt: "2023-06-10 00:00:00", 
        updatedAt: "2023-03-01 00:00:00"
      }
    ],{});
  
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