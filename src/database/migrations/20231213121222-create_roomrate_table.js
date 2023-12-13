'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('roomrates', {
      Room_type: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      Weekday_rates_increase: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      Weekend_rates_increase: {
        type: Sequelize.STRING(10),
        allowNull: false
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('roomrates');
  }
};
