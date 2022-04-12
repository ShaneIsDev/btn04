const authenticationService = require("./authenticationService");

exports.registerShow = (req, res, next) => {
  res.render("authentication/register");
};

exports.register = async function (req, res) {
  const {username, email, password}=req.body;
  const user=await authenticationService.isUserExist(email);
  if (user){
    res.render("./authentication/register",{
      title: 'Register',
      error: 'User already exist!',
    });
    return;
  }
  await authenticationService.register(username,password,email);

  res.redirect("/login");
};

exports.loginShow = (req, res, next) => {
  if (req.user) {
    res.redirect("/list");
  } else {
    res.render("/list");
  }
};
