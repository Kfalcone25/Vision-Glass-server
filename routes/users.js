var express = require("express");
var router = express.Router();
const Contact = require("../models/Contact");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/contact", (req, res, next) => {
  const { name, zip, email, phone, service, details } = req.body;
  console.log(email, name, details);
  // Check if email or password are provided as empty string
  if (email === "" || name === "" || details === "") {
    res.status(400).json({ message: "Provide email and password." });
    return;
  }

  const emailRegex =
    /^(?!.*[\s<>])(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ message: "Provide a valid email address." });
    return;
  }

  Contact.findOne({ email })
    .then((foundUser) => {
      // If the user with the same email already exists, send an error response
      if (foundUser) {
        res.status(400).json({ message: "User already exists." });
        console.log(foundUser);
        return;
      }

      // Create a new user in the database
      // We return a pending promise, which allows us to chain another `then`
      return Contact.create({ name, zip, email, phone, service, details });
    })
    .then((createdContact) => {
      console.log("Contact: ", createdContact);
      res.json(createdContact);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

module.exports = router;
