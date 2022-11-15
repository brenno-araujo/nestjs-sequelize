'use strict';

// export async function up(queryInterface, Sequelize) {
//   await queryInterface.createTable('authors', {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: Sequelize.INTEGER
//     },
//     name: {
//       type: Sequelize.STRING
//     },
//     created_at: {
//       allowNull: false,
//       type: Sequelize.DATE
//     },
//     updated_at: {
//       allowNull: false,
//       type: Sequelize.DATE
//     }
//   });
// }

// export async function down(queryInterface, Sequelize) {
//   await queryInterface.dropTable('authors');
// }
export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('authors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  }
  ,
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('authors');
  }
};