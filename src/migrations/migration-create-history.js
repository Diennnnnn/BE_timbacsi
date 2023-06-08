// "use strict";
// export async function up(queryInterface, Sequelize) {
//   await queryInterface.createTable("histories", {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: Sequelize.INTEGER,
//     },
//     SDT: {
//       type: Sequelize.STRING,
//     },
//     ngay: {
//       type: Sequelize.DATE,
//     },
//     name_bacsi: {
//       type: Sequelize.STRING,
//     },
//     chandoan: {
//       type: Sequelize.STRING,
//     },
//     donthuoc: {
//       type: Sequelize.STRING,
//     },
//     ketquaCLS: {
//       type: Sequelize.STRING,
//     },

//     createdAt: {
//       allowNull: false,
//       type: Sequelize.DATE,
//     },
//     updatedAt: {
//       allowNull: false,
//       type: Sequelize.DATE,
//     },
//   });
// }
// export async function down(queryInterface, Sequelize) {
//   //down: async (queryInterface, Sequelize)=> {

//   await queryInterface.dropTable("histories");
// }


"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("histories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      SDT: {
              type: Sequelize.STRING,
            },
            ngay: {
              type: Sequelize.DATE,
            },
            username:{
              type: Sequelize.STRING,
            },
            password:{
              type: Sequelize.STRING,
            },
            hovaten:{
              type: Sequelize.STRING,
            },
            name_bacsi: {
              type: Sequelize.STRING,
            },
            chandoan: {
              type: Sequelize.STRING,
            },
            donthuoc: {
              type: Sequelize.STRING,
            },
            ketquaCLS: {
              type: Sequelize.STRING,
            },        
    
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("histories");
  },
};
