'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.Teacher, { foreignKey: 'teacher_id' });
    }
  }
  Student.init({
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    teacher_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teachers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};