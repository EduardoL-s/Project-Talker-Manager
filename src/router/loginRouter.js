const { Router } = require('express');

const loginRouter = Router();

const validationLoginEmail = (req, res, next) => {
    if (req.body.email === '' || req.body.email === undefined) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }

    // validação de email encontrado no site: https://horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const formatoEmail = /\S+@\S+\.\S+/;
  
    if (!formatoEmail.test(req.body.email)) {
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
  
    next();
  };

  const validationLoginPassword = (req, res, next) => {
    if (req.body.password === '' || req.body.password === undefined) {
      return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
  
    if (req.body.password.length < 6) {
      return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
  
    next();
  };

  loginRouter.post('/', validationLoginEmail, validationLoginPassword, (req, res) => {
    // Método de geração aleatória de token encontrado no site: https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28
    const randomToken = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
    const tokenG = randomToken.slice(0, 16);
    return res.status(200).json({ token: tokenG });
  });

module.exports = {
    loginRouter,
};