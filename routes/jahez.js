const express = require("express");
const jahezRouter = express.Router();
const Jahez = require("../model/jahez");

//CRUD

//create
jahezRouter.post("/", (req, res) => {
  const jahez = new Jahez(req.body);
  jahez.save((err, document) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Unable to add jahez",
          msgError: true,
        },
      });
    else
      res.status(200).json({
        message: {
          msgBody: "Successfully Added jahez",
          msgError: false,
        },
      });
  });
});

module.exports = jahezRouter;
