const express = require('express');
const jwt = require('jsonwebtoken');

const authMiddleware = require('./auth');

const router = express.Router();

router.post('/authenticate', (req, res) => {
  // user fake para simulação de login
  const user = {
    id: 1,
    name: 'Deko Possas',
    company: 'Trybe',
    website: 'https://www.linkedin.com/in/andrepossas/'
  };

  return res.json({
    user,
    token: jwt.sign(user, 'PRIVATEKEY'),
  })
});

// irado essa linha, não tenho certeza do uso, acredito que ele cria a rota ja testando o middleware
router.use(authMiddleware);

router.get('/users', async (req, res) => {
  return res.json([
    {
      id: 1,
      name: 'Deko Possas',
      website: 'https://www.linkedin.com/in/andrepossas/',
    },
    {
      id: 2,
      name: 'Mark Zuckerberg',
      website: 'https://facebook.com',
    },
    {
      id: 3,
      name: 'Bill Gates',
      website: 'https://www.microsoft.com',
    }
  ])
});

module.exports = router;
