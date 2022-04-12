const express = require("express");
const router = express.Router();
const interactionControllers = require("./interactController");


/* GET home page. */
router.get("/list", interactionControllers.listShow);
router.post("/list", interactionControllers.listShow);
router.post(
  "/post",
  passport.authenticate("local", {
    successRedirect: "/post",
    failureRedirect: "/post",
  })
);
router.get("/logout", function (req, res, next) {
  req.logout();
  res.redirect("/");
});
module.exports = router;
