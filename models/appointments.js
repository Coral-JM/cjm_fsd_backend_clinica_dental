'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointments.belongsTo(
        models.User,
        {
          foreignKey: 'user_id'
      }),

      Appointments.belongsTo(
        models.Doctor,
        {
          foreignKey: 'doctor_id'
      }),

      Appointments.belongsTo(
        models.Service,
        {
          foreignKey: 'service_id'
      });
    }
  }
  Appointments.init({
    service_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    comments: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Appointments',
  });
  return Appointments;
};