const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection");

const PaymentModel = sequelize.define("payment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  paymentGateway: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.ENUM("pending", "success", "failed"),
    defaultValue: "pending",
  },
  transactionId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
module.exports = PaymentModel;
