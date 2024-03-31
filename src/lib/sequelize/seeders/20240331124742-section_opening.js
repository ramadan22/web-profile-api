'use strict';
const uuid = require('../../../lib/uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('section_opening', [{
      id: uuid.generateId(),
      small_title: 'Hello, Welcome',
      title: 'I m Haris Ramadan',
      description: `Learn, Sharing, Problem solving, Try something new. I love all of those. let's talk to build some miracle!`,
      image: '',
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('section_opening', null, {});
  }
};
