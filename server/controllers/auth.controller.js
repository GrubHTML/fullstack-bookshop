const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

const userSignUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPass = await bcrypt.hash(password, 12);
    const user = await UserModel.create({
      username,
      email,
      password: hashedPass,
      role: 0,
    });
    return res.status(400).json({ message: "User is created" }, user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const userSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken({ id: user.id, role: user.role });
    const { password: _, ...safeUser } = user.toJSON();
    return res.status(200).json({
      token,
      user: safeUser,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = { userSignIn, userSignUp };
