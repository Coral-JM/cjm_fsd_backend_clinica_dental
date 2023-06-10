'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    */
    await queryInterface.bulkInsert('Users', [
      {
            id: 1,
            name: "Ana", 
            emai:"ana@ana.com", 
            roleId: 1,
            createdAt: "2023-06-10 00:00:00", 
            updatedAt: "2023-06-10 00:00:00"
        },
      {
            id: 2,
            name: "Cris", 
            email: "cris@gmail.com", 
            password: "12345678", 
            roleId: 1, 
            createdAt: "2023-06-10 00:00:00", 
            updatedAt: "2023-06-10 00:00:00"
        },
        {
            id: 3,
            name: "Montse", 
            email: "montse@gmail.com", 
            password: "12345678", 
            roleId: 1, 
            createdAt: "2023-06-10 00:00:00", 
            updatedAt: "2023-06-10 00:00:00"
        },
          {
            id: 4,
            name: "Coral", 
            email: "coral@gmail.com", 
            password: "12345678", 
            roleId: 1, 
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
