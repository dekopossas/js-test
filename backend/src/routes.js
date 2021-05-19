const express = require('express');
const jwt = require('jsonwebtoken');

// const authMiddleware = require('./auth');

const router = express.Router();

router.post('/authenticate', (req, res) => {
  // user fake para simulação de login
  const user = {
    id: 1,
    name: 'Mateus Silva',
    company: 'DevAcademy',
    website: 'http://devacademy.com.br'
  };

  return res.json({
    user,
    token: jwt.sign(user, 'PRIVAREKEY'),
  })
});

