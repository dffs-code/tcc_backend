const { Model, DataTypes } = require("sequelize");

class Teacher extends Model {
  static init(sequelize) {
    super.init(
      {
        about: DataTypes.TEXT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }); // ok
    this.hasMany(models.Card, { foreignKey: 'teacher_id', as: 'card' })
    this.hasMany(models.Qualification, { foreignKey: 'teacher_id', as: 'qualification' })
  }
}

module.exports = Teacher;