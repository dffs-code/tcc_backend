const { Model, DataTypes } = require("sequelize");

class Subject extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'categories'})
    this.hasMany(models.Card, { foreignKey: 'subject_id', as: 'cards' })
  }
}

module.exports = Subject;