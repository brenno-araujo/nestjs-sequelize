'use strict';

// export async function up(queryInterface, Sequelize) {
//   await queryInterface.createTable('books', {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: Sequelize.INTEGER
//     },
//     title: {
//       type: Sequelize.STRING
//     },
//     barcode: {
//       type: Sequelize.STRING
//     },
//     author_id: {
//       type: Sequelize.INTEGER,
//       references: {
//         model: 'authors',
//         key: 'id'
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'SET NULL'
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
//   await queryInterface.dropTable('books');
// }

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      barcode: {
        type: Sequelize.STRING
      },
      author_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'authors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('books');
  }
};
