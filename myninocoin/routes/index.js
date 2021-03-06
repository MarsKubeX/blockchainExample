const express = require('express');
const router = express.Router();
const { check } = require('express-validator/check')

const Myninocoin = require('../middleware/myninocoin')

const responseMiddleware = (req, res, next) => {
  return res.json(req.responseValue);
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mynino coin' });
});

router.post('/transactions/new', [
  check('sender', 'Sender must be a String').exists(),
  check('recipient', 'Sender must be a String').exists(),
  check('amount', 'Sender must be a Int Value').isInt().exists()
], Myninocoin.newTransaction, responseMiddleware)

router.get('/mine', Myninocoin.mine, responseMiddleware)

router.get('/chain', Myninocoin.getChain, responseMiddleware)

module.exports = router;
