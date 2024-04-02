'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('section_educational', {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(225),
        allowNull: false,
      },
      small_title: {
        type: DataTypes.STRING(225),
        allowNull: false,
      },
      list: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE(6),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(6)'),
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE(6),
        defaultValue: Sequelize.literal('NULL ON UPDATE CURRENT_TIMESTAMP(6)'),
        allowNull: true,
      },
    }, {
      timestamps: true,
      underscored: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('section_educational');
  }
};
