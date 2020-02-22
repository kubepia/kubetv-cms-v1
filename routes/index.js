var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200)
      .type("html")
      .send("cms-v1");
});

router.get("/health", function(req, res, next) {
  res.status(200)
      .type("html")
      .send("cms-v1");
});

module.exports = router;
