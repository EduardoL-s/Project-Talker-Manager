const validationLoginEmail = (req, res, next) => {
    if (req.body.email === '' || req.body.email === undefined) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }

    // validação de email encontrado no site: https://horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const formatEmail = /\S+@\S+\.\S+/;
  
    if (!formatEmail.test(req.body.email)) {
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

  module.exports = {
    validationLoginEmail,
    validationLoginPassword,
  };