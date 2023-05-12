const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const Note = require("../model/Notes");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jwt secret string";
const { wrapAsync } = require("../utils/helper");

router.get("/", (req, res) => {
  console.log("note route running");
});

router.get(
  "/getNotes",
  passport.authenticate("jwt", { session: false }),
  wrapAsync(async function (req, res) {
    console.log("getting notes of", req.user, req.user._id);
    const user = await User.findById(req.user._id);
    const classes = user.classes;
    console.log(classes);
    res.json(classes);
  })
);

router.post(
  "/postNotes",
  passport.authenticate("jwt", { session: false }),
  wrapAsync(async function (req, res) {
    console.log(req.user.name, req.user._id);
    console.log("Posted with body: " + JSON.stringify(req.body));
    const newNote = new Note({
      userName: req.user.name,
      className: req.body.className,
      createdDate: Date.now(),
      details: req.body.details,
    });
    const user = req.user;
    user.classes.push(newNote._id);
    await user.save();
    await newNote.save();

    res.json(newNote);
  })
);
module.exports = router;
