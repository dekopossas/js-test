const jwt = require('jsonwebtoken');
const { promisify } = require('util');

async function validate(req, res, next) {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.sendStatus(401);
  }

  //não faço ideia do que essa linha faz
  const [, token] = authorization.split(' ');

  try {
    await promisify(jwt.verify)(token, 'PRIVATEKEY');

    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

module.exports = validate;
