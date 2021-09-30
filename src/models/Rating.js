const { Model, DataTypes } = require("sequelize");

class Rating extends Model {
  static init(sequelize) {
    super.init(
      {
        stars: DataTypes.INTEGER,
        message: DataTypes.TEXT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Request, { foreignKey: 'request_id', as: 'request' });
    this.belongsTo(models.Card, { foreignKey: 'card_id', as: 'card' });
  }
}

module.exports = Rating;