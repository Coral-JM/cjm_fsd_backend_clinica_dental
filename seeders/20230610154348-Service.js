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
    await queryInterface.bulkInsert('Services', [
      {
        id: 1,
        name: "Exámen y limpieza dental", 
        description:"Exámen dental completo. Revisión de los dientes, las encías, la mandíbula y otras estructuras orales. Limpieza dental profesional para eliminar la placa, el sarro y las manchas superficiales de los dientes.", 
        medication:"Innecesario", 
        price: "Desde 50,00€",
        createdAt: "2023-06-10 00:00:00", 
        updatedAt: "2023-06-10 00:00:00"
      },
      {
        id: 2,
        name: "Tratamiento de restauración dental", 
        description:"Puede incluir empastes dentales para tratar las caries, coronas dentales para proteger y fortalecer los dientes debilitados, y puentes dentales o implantes dentales para reemplazar los dientes perdidos.", 
        medication:"Clorhexidina, anestesia tópica", 
        price: "Desde 75,00€",
        createdAt: "2023-06-10 00:00:00", 
        updatedAt: "2023-06-10 00:00:00"
      },
      {
        id: 3,
        name: "Tratamiento de ortodoncia", 
        description:"servicio de ortodoncia para corregir la alineación y la mordida incorrecta de los dientes. Esto puede incluir la colocación de frenillos tradicionales, aparatos de ortodoncia removibles o el uso de alineadores transparentes como Invisalign.", 
        medication:"Clorhexidina, anestesia tópica", 
        price: "Desde 310,00€",
        createdAt: "2023-06-10 00:00:00", 
        updatedAt: "2023-06-10 00:00:00"
      },
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
