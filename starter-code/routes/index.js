const express = require('express');

const router = express.Router();

/* GET home page */
router.get('/', (req, res) => {
  console.log('entrou no index.js')
  res.render('index');
});

module.exports = router;
