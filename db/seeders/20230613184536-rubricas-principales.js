"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rubricas",
      [
        {
          uuid: "36b57b05-b26d-11ed-be5e-005056108e36",
          name: "Deseo, pasión, metas",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "36b582aa-b26d-11ed-be5e-005056108e36",
          name: "Alegría, juego, reglas",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "36b59370-b26d-11ed-be5e-005056108e36",
          name: "Cálculo lógico y sobrevivencia",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "36b59437-b26d-11ed-be5e-005056108e36",
          name: "Interculturalidad, reflexión",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "36b5948e-b26d-11ed-be5e-005056108e36",
          name: "Aplicación cotidiana del conocimiento",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "36b594d6-b26d-11ed-be5e-005056108e36",
          name: "Sistema operativo neurocognitivo",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "36b5951c-b26d-11ed-be5e-005056108e36",
          name: "Incremento de confianza en sí",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "36b595a4-b26d-11ed-be5e-005056108e36",
          name: "Creatividad, pensamiento lateral",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "36b595e4-b26d-11ed-be5e-005056108e36",
          name: "Apreciación estética",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "36b59620-b26d-11ed-be5e-005056108e36",
          name: "Pasión por la perfección",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "36b5965e-b26d-11ed-be5e-005056108e36",
          name: "Apreciación bio-ética",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "36b596a4-b26d-11ed-be5e-005056108e36",
          name: "Preparación del movimiento siguiente",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          uuid: "6c117abf-b7d7-11ed-88cb-005056108e36",
          name: "Amoroso",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "6c11b20e-b7d7-11ed-88cb-005056108e36",
          name: "Triste",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "6c11b2cb-b7d7-11ed-88cb-005056108e36",
          name: "Temeroso",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "6c11b383-b7d7-11ed-88cb-005056108e36",
          name: "Disgustado",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "6c11b3d7-b7d7-11ed-88cb-005056108e36",
          name: "Sorprendido",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "6c11b421-b7d7-11ed-88cb-005056108e36",
          name: "Culpable",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "6c11b460-b7d7-11ed-88cb-005056108e36",
          name: "Iracundo",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "6c11b49d-b7d7-11ed-88cb-005056108e36",
          name: "Avergonzado",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "6c11b4de-b7d7-11ed-88cb-005056108e36",
          name: "Tranquilo",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "6c11b51a-b7d7-11ed-88cb-005056108e36",
          name: "Enérgico",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "6c11b554-b7d7-11ed-88cb-005056108e36",
          name: "Desganado",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "6c11b58f-b7d7-11ed-88cb-005056108e36",
          name: "Alegre",
          type: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Ex,ample:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rubricas", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
