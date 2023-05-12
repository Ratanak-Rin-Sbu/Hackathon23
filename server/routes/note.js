const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const Note = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jwt secret string";
const { wrapAsync } = require("../utils/helper");

router.get("/", (req, res) => {
  console.log("note route running");
});

router.post(
  "/postNotes",
  wrapAsync(async function (req, res) {
    console.log("Posted with body: " + JSON.stringify(req.body));
    const newNote = new Note({
      userName: req.body.userName,
      className: req.body.className,
      createdDate: Date.now(),
      details: req.body.details,
    });

    await newNote.save();
    res.json(newQuestion);
  })
);
// router.get(
//   "/getTransactions",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     // console.log("getting transaction of", req.user, req.user._id);
//     const transactions = await Transaction.find({ user: req.user._id }).sort({
//       createdAt: -1,
//     });
//     //find with an empth body means that it will be looking for everything
//     res.send(transactions);
//   }
// );
// router.get(
//   "/getGroupedTransactions",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     // console.log("getting transaction of", req.user, req.user._id);
//     const transactions = await Transaction.find({ user: req.user._id }).sort({
//       createdAt: -1,
//     });
//     const test = await Transaction.aggregate([
//       { $match: { user: req.user._id } },
//       {
//         $group: {
//           _id: { $month: "$date" },
//           transactions: {
//             $push: {
//               amount: "$amount",
//               details: "$details",
//               date: "$date",
//             },
//           },
//           totalExpenses: { $sum: "$amount" },
//         },
//       },
//     ]);
//     //find with an empth body means that it will be looking for everything
//     res.send(test);
//   }
// );

// router.put(
//   "/updateTransaction/:id",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const updatedData = req.body;
//     await Transaction.updateOne({ _id: req.params.id }, { $set: updatedData });
//     res.json({ message: "Successfully updated on DB" });
//   }
// );

// router.delete(
//   "/delete/:id",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const _id = req.params.id;
//     await Transaction.findOneAndDelete({ _id: _id });
//     res.json({ message: "Successfully deleted from DB" });
//   }
// );
module.exports = router;
