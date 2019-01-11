var express = require('express');
var router = express.Router();

//ディレクトリにアクセスしたらHellow Worldと表示する
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hellw World' });
});

module.exports = router;
