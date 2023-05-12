const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const Note = require("../model/Notes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jwt secret string";
const { wrapAsync } = require("../utils/helper");

router.get("/", (req, res) => {
  console.log("note route running");
});

router.post(
  "/postNotes",
  passport.authenticate("jwt", { session: false }),
  wrapAsync(async function (req, res) {
    console.log(req.user.name);
    console.log("Posted with body: " + JSON.stringify(req.body));
    const newNote = new Note({
      userName: req.user.name,
      className: req.body.className,
      createdDate: Date.now(),
      details: req.body.details,
    });
    await newNote.save();
    res.json(newNote);
  })
);
module.exports = router;
