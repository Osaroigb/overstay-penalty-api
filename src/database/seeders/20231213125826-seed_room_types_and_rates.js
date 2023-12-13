'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('roomrates', [
      {
        Room_type: 'regular',
        Weekday_rates_increase: '7%',
        Weekend_rates_increase: '10%'
      },
      {
        Room_type: 'deluxe',
        Weekday_rates_increase: '8.5%',
        Weekend_rates_increase: '12%'
      },
      {
        Room_type: 'palatial',
        Weekday_rates_increase: '11%',
        Weekend_rates_increase: '16%'
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('roomrates', null, {});
  }
};
