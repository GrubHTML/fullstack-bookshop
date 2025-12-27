const express = require("express");
const app = express();
require("dotenv").config();
const { sequelize } = require("./config/dbConnection");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
// models
require("./models/user.model.js");
require("./models/book.model.js");
require("./models/cart.model.js");
require("./models/cartItem.model.js");
require("./models/order.model.js");
require("./models/orderItem.model.js");
require("./models/payment.model.js");
// routes
const userRouter = require("./routes/user.route.js");

// middlewares
app.use(cors());
app.use(express.json());
// app.use("/api/users", userRouter);
app.use("/api/auth", require("./routes/auth.routes"));
// DB connection section
const dbCreate = async () => {
  try {
    await sequelize.sync({ alter: false });
    console.log("Database synced successfully");
  } catch (error) {
    console.log("Error syncing table:", error);
  }
};
dbCreate();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, (err) => {
  console.log(`server is running at http://localhost:${PORT}`);
});
