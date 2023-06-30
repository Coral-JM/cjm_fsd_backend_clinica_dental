'use strict';
const bcrypt = require('bcrypt');
const passwordId1 = '12345678';
const newPasswordId = bcrypt.hashSync(passwordId1, 10);

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
            name: "Ana Saddouki", 
            email:"ana@ana.com", 
            password: newPasswordId, 
            role_id: 2,
            createdAt: "2023-06-10 00:00:00", 
            updatedAt: "2023-06-10 00:00:00"
        },
      {
            id: 2,
            name: "Cristina Puig", 
            email: "cris@gmail.com", 
            password: newPasswordId, 
            role_id: 2, 
            createdAt: "2023-06-10 00:00:00", 
            updatedAt: "2023-06-10 00:00:00"
        },
        {
            id: 3,
            name: "Montse Blasco", 
            email: "montse@gmail.com", 
            password: newPasswordId, 
            role_id: 1, 
            createdAt: "2023-06-10 00:00:00", 
            updatedAt: "2023-06-10 00:00:00"
        },
          {
            id: 4,
            name: "Coral Jimenez", 
            email: "coral@gmail.com", 
            password: newPasswordId, 
            role_id: 1, 
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
