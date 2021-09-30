const { Model, DataTypes, } = require("sequelize");

class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        about: DataTypes.TEXT,
        price: DataTypes.FLOAT,
        modality: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Teacher, { foreignKey: 'teacher_id', as: 'teacher' });
    this.belongsTo(models.Subject, { foreignKey: 'subject_id', as: 'subject' });
    this.hasMany(models.Request, { foreignKey: 'card_id', as: 'requests' });
    this.hasMany(models.Rating, { foreignKey: 'card_id', as: 'ratings' });
  }
}

module.exports = Card;