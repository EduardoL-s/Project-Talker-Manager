const { Router } = require('express');
const { validationLoginEmail, validationLoginPassword } = require('../middlewares');

const loginRouter = Router();

  loginRouter.post('/', validationLoginEmail, validationLoginPassword, (req, res) => {
    // Método de geração aleatória de token encontrado no site: https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28
    const randomToken = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
    const tokenG = randomToken.slice(0, 16);
    return res.status(200).json({ token: tokenG });
  });

module.exports = {
    loginRouter,
};