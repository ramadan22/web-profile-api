'use strict';
const uuid = require('../../../lib/uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('section_educational', [
      {
        id: uuid.generateId(),
        title: 'Al-Amanah High School',
        small_title: 'Software Enginer',
        list: `Runner Up Lomba Web Design <a target="_blank" className="text-primary hover:text-primary/50" href="https://www.alamanahbantani.sch.id/berita/smk-al-amanah/8/smk-al-amanah-meraih-posisi-runner-up-kota-tangerang-selatan.html">link</a>,Pernah Membuat Pemilihan Ketua Osis Online,Praktek Kerja Lapangan - PUSPITEK,Peringkat Satu Uji Kompetensi`,
      },
      {
        id: uuid.generateId(),
        title: 'Pamulang University',
        small_title: 'Software Enginer',
        list: `Penyelenggara Seminar Wordpress`,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('section_educational', null, {});
  }
};
