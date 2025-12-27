const express = require("express");
const { userSignUp, userSignIn } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);

module.exports = router;
