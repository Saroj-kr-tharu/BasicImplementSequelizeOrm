'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


    await queryInterface.bulkInsert('todos', [
      {
        title: 'Asignmnet of COA',
        description: 'up to 2024',
        complete: false,
        createdAt: "2024-12-02 07:55:42",
        updatedAt: "2024-12-02 07:55:42"
      },
      {
        title: 'Play footsal',
        description: 'thursday',
        complete: false,
        createdAt: "2024-12-02 07:55:42",
        updatedAt: "2024-12-02 07:55:42"
      },
      {
        title: 'Music class',
        description: 'up to 2024',
        complete: false,
        createdAt: "2024-12-02 07:55:42",
        updatedAt: "2024-12-02 07:55:42"
      },
      {
        title: 'dance class',
        description: 'up to 2024',
        complete: false,
        createdAt: "2024-12-02 07:55:42",
        updatedAt: "2024-12-02 07:55:42"
      },
      {
        title: 'Video call',
        description: 'up to 2024',
        complete: false,
        createdAt: "2024-12-02 07:55:42",
        updatedAt: "2024-12-02 07:55:42"
      },
      {
        title: 'Call to gf',
        description: 'up to 2024',
        complete: false,
        createdAt: "2024-12-02 07:55:42",
        updatedAt: "2024-12-02 07:55:42"
      },



    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
