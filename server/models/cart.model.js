const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection");

const CartModel = sequelize.define("Cart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

module.exports = CartModel;
