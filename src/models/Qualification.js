const { Model, DataTypes } = require("sequelize");

class Qualification extends Model {
  static init(sequelize) {
    super.init(
      {
        degree: DataTypes.STRING,
        course: DataTypes.STRING,
        institution: DataTypes.STRING,
        yearFormation: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Teacher, { foreignKey: 'teacher_id', as: 'teachers' });
  }
}

module.exports = Qualification;