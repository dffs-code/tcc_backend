const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          validate: {
            isEmail: true
          }
        },
        password: DataTypes.STRING,
        dateBirth: DataTypes.DATEONLY,
        zipCode: DataTypes.STRING,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
        district: DataTypes.STRING,
        address: DataTypes.STRING,
        avatar: DataTypes.STRING,
        isActive: {
          type: DataTypes.BOOLEAN,
          defaultValue: "1",
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Student, { foreignKey: 'user_id', as: 'student' }) //ok 
    this.hasMany(models.Teacher, { foreignKey: 'user_id', as: 'teachers' }) //ok 
  }
}

module.exports = User;