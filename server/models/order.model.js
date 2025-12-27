const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection");

const OrderModel = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(
      "pending",
      "paid",
      "shipped",
      "delivered",
      "cancelled"
    ),
    defaultValue: "pending",
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = OrderModel;
