// all of the associations will be write here
// const User = require("./user.model");
// const Book = require("./book.model");
// const Cart = require("./cart.model");
// const CartItem = require("./cartItem.model");
// const Order = require("./order.model");
// const OrderItem = require("./orderItem.model");
// const Payment = require("./payment.model");

// /* ================= USER ================= */
// User.hasOne(Cart, { foreignKey: "userId", onDelete: "CASCADE" });
// Cart.belongsTo(User, { foreignKey: "userId" });

// User.hasMany(Order, { foreignKey: "userId" });
// Order.belongsTo(User, { foreignKey: "userId" });

// /* ================= CART ================= */
// Cart.hasMany(CartItem, { foreignKey: "cartId", onDelete: "CASCADE" });
// CartItem.belongsTo(Cart, { foreignKey: "cartId" });

// /* ================= BOOK ================= */
// Book.hasMany(CartItem, { foreignKey: "bookId" });
// CartItem.belongsTo(Book, { foreignKey: "bookId" });

// Book.hasMany(OrderItem, { foreignKey: "bookId" });
// OrderItem.belongsTo(Book, { foreignKey: "bookId" });

// /* ================= ORDER ================= */
// Order.hasMany(OrderItem, { foreignKey: "orderId", onDelete: "CASCADE" });
// OrderItem.belongsTo(Order, { foreignKey: "orderId" });

// Order.hasOne(Payment, { foreignKey: "orderId", onDelete: "CASCADE" });
// Payment.belongsTo(Order, { foreignKey: "orderId" });

// module.exports = {
//   User,
//   Book,
//   Cart,
//   CartItem,
//   Order,
//   OrderItem,
//   Payment,
// };
