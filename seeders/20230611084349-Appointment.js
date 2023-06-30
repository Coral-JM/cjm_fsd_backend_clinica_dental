'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments', [
      {
        service_id: 1,
        user_id: 3, 
        doctor_id: 1,
        date: "2023-06-15 10:30:00",
        comments: "Accepted",
        createdAt: "2023-06-10 00:00:00", 
        updatedAt: "2023-03-01 00:00:00"
      },
      {
        service_id: 2,
        user_id: 4, 
        doctor_id: 2,
        date: "2023-06-15 11:30:00",
        comments: "Accepted",
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