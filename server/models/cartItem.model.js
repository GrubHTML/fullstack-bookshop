const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection");

const CartItemModel = sequelize.define("CartItem", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

module.exports = CartItemModel;
