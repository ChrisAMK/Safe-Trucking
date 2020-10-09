// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
let user = {};

module.exports = function(server) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  server.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });

    user = { ...req.user }
    // console.log(req);
    console.log(req.user.email);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  server.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      isManager: req.body.isManager
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        // If validation Fails
        console.log(err)
        // res.status(401).json(err);
      });
  });

  // Route for logging user out
  server.get("/logout", (req, res) => {
    console.log(req.user)
    req.logout();
    res.redirect("/");
    user = {};
    console.log(req.user)
  });

  // Route for getting some data about our user to be used client side
  server.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // server.get("/api/manager", (req, res) => {
    
  // })

  server.get("/api/user", (req, res) => {
    console.log("Getting user Info");
    res.send(user)
  });

};