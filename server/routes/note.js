const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Note = require("../model/User");
const passport = require("passport");

router.get("/", (req, res) => {
  console.log("note route running");
});

router.post(
  "/postNote",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    console.log(req.user);
    const { userName, className, date, details } = req.body;
    const transaction = new Note({
      userName: req.user.name,
      className,
      details,
      createdDate,
    });
    await transaction.save();
    res.send({ message: "Successfully saved on DB" });
  }
);
router.get(
  "/getTransactions",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // console.log("getting transaction of", req.user, req.user._id);
    const transactions = await Transaction.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    //find with an empth body means that it will be looking for everything
    res.send(transactions);
  }
);
router.get(
  "/getGroupedTransactions",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // console.log("getting transaction of", req.user, req.user._id);
    const transactions = await Transaction.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    const test = await Transaction.aggregate([
      { $match: { user: req.user._id } },
      {
        $group: {
          _id: { $month: "$date" },
          transactions: {
            $push: {
              amount: "$amount",
              details: "$details",
              date: "$date",
            },
          },
          totalExpenses: { $sum: "$amount" },
        },
      },
    ]);
    //find with an empth body means that it will be looking for everything
    res.send(test);
  }
);

router.put(
  "/updateTransaction/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const updatedData = req.body;
    await Transaction.updateOne({ _id: req.params.id }, { $set: updatedData });
    res.json({ message: "Successfully updated on DB" });
  }
);

router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const _id = req.params.id;
    await Transaction.findOneAndDelete({ _id: _id });
    res.json({ message: "Successfully deleted from DB" });
  }
);
module.exports = router;
