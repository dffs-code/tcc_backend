'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'students', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      card_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cards', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      startDateTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endDateTime: {
        allowNull: false,
        type: Sequelize.DATE
      },  
      message: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      reply: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('requests');
  }
};
