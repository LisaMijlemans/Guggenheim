var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    tentoonstellingen: req.app.get('tentoonstellingenFile').tentoonstellingen,
    categorieen: req.app.get('categorieenFile').categorieen
  });
});

module.exports = root;
