var express = require("express");
var tentoonstellingen = express.Router();

tentoonstellingen.get('/items/:id', function(req, res) {
  var tentoonstellingenFile = req.app.get('tentoonstellingenFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < tentoonstellingenFile.tentoonstellingen.length ) {
    if (tentoonstellingenFile.tentoonstellingen[teller].id == id) {
      item = tentoonstellingenFile.tentoonstellingen[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("tentoonstellingen", {
      item: item,
      categorieen: req.app.get('categorieenFile').categorieen
    });
  } else {
    res.render("404", {});
  }
});

module.exports = tentoonstellingen;
