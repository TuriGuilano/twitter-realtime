const express = require('express');
const router = express.Router();
const app = express();

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
