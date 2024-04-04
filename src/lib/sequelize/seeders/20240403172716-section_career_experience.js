'use strict';
const uuid = require('../../../lib/uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('section_career_experience', [
      {
        id: uuid.generateId(),
        logo: '',
        title: 'Incube Solutions',
        description: 'INCUBE Solutions is an IT Solution provider company, offering a wide range of IT solutions customized to various verticals and horizontals.',
        sort: 1,
      },
      {
        id: uuid.generateId(),
        logo: '',
        title: 'Codelabs Indonesia',
        description: 'Codelabs is an intelligent IT solutions provider specializing in the development, implementation and maintenance',
        sort: 2,
      },
      {
        id: uuid.generateId(),
        logo: '',
        title: 'Alteacare',
        description: 'AlteaCare, under PT. Sehat Digital Nusantara, is a leading health app in Indonesia, providing diverse services such as teleconsultations with specialists, prescription drug delivery, vaccination registration, and up-to-date health information.',
        sort: 3,
      },
      {
        id: uuid.generateId(),
        logo: '',
        title: 'Pina Indonesia',
        description: 'PINA is shaping the future of personal finance, striving to empower everyone for financial freedom. Their mission involves simplifying complex financial decisions through personalized advice and robust online tools, enabling smarter investing.',
        sort: 4,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('section_career_experience', null, {});
  }
};
