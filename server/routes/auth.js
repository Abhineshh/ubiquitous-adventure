const {
  login,
  register,
  logOut,
} = require("../controller/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/logout/:id", logOut);

module.exports = router;
