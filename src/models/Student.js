const { Model, DataTypes } = require("sequelize");

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        interest: DataTypes.TEXT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }); //ok 
    this.hasMany(models.Request, { foreignKey: 'student_id', as: 'requests' }) // ok
  }
}

module.exports = Student;