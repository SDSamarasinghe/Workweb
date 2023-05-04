const AppUser = require("../models/UserModel");

const registerUser = (req, res) => {
  let { userName, email, password , userType, other} = req.body;

  AppUser.create({ userName, email, password, userType, other}, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};

const loginUser = (req, res) => {
  console.log(req.body);

  if (
    !req.body.email ||
    !req.body.password ||
    req.body.password === null ||
    req.body.email === null
  ) {
    res.status(401).json({ error: "Email or Password doesn't match" });
  }

  AppUser.findOne({ email: req.body.email }, function (err, doc) {
    if (err) {
      res.status(401).json({ error: "Email or Password doesn't match" });
    } else {
      if (req.body.password === doc.password) {
        req.session.user = doc;
        res.status(200).json(doc);
      } else {
        res.status(401).json({ error: "Password doesn't match" });
      }
    }
  });
};

const currentUser = (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(401).json({ error: "User not found" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await AppUser.find();
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const removeUser = async (req, res) => {
  const UserID = req.params.id;

  try {
    const ad = await AppUser.findById(UserID);
    if (!ad) {
      return res.status(404).json("There is no Users to remove");
    }

    const removedUsers = await AppUser.findByIdAndDelete(UserID);
    res.status(200).json(removedUsers);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  registerUser,
  removeUser,
  loginUser,
  getUser,
  currentUser,
};
