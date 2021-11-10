const { Model, DataTypes } = require("sequelize");

class Request extends Model {
  static init(sequelize) {
    super.init(
      {
        startDateTime: DataTypes.DATE,
        endDateTime: DataTypes.DATE,
        message: DataTypes.TEXT,
        reply: DataTypes.TEXT,
        status: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' }); //ok
    this.belongsTo(models.Card, { foreignKey: 'card_id', as: 'card' }); //ok
    this.hasMany(models.Rating, { foreignKey: 'request_id', as: 'ratings' }) // ok

  }
}

module.exports = Request;