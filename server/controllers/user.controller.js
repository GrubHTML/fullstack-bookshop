// const UserModel = require("../models/user.model");
// const bcrypt = require("bcrypt");
// const userSignUp = async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const hashedPass = await bcrypt.hash(password, 12);
//     const userData = await UserModel.create({
//       username: username,
//       email: email,
//       password: hashedPass,
//     });
//     const { password: _, ...safeUser } = userData.toJSON();
//     return res.status(200).json({ safeUser });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };
// const userSignIn = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const userData = await UserModel.findOne({
//       where: { username },
//     });
//     if (!userData) return res.status(404).json({ message: "user not found" });
//     const isValid = await bcrypt.compare(password, userData.password);
//     if (!isValid)
//       return res.status(401).json({ message: "invalid credentials" });
//     return res.status(200).json({ message: "user signed in successfully" });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };
// module.exports = { userSignUp, userSignIn };
