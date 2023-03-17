const validationTalkerToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }

    if (req.headers.authorization.length !== 16 || typeof req.headers.authorization !== 'string') {
        return res.status(401).json({ message: 'Token inválido' });
    }

    next();
};

const validationTalkerName = (req, res, next) => {
    if (req.body.name === '' || req.body.name === undefined) {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }

    if (req.body.name.length < 3) {
      return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }

    next();
};

const validationTalkerAge = (req, res, next) => {
    if (req.body.age === undefined) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }

    if (!Number.isInteger(req.body.age) || req.body.age < 18) {
      return res.status(400).json({
        message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
    });
    }

    next();
};

const validationTalkerTalk = (req, res, next) => {
    if (req.body.talk === '' || req.body.talk === undefined) {
      return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }

    next();
};

const validationTalkerWatchedAt = (req, res, next) => {
    if (req.body.talk.watchedAt === '' || req.body.talk.watchedAt === undefined) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
      }

    const formatoData = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!formatoData.test(req.body.talk.watchedAt)) {
        return res.status(400).json({
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        });
      }
    
    next();
};

const validationTalkerRate = (req, res, next) => {
    if (req.body.talk.rate === undefined) {
        return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
      }

    if (!Number.isInteger(req.body.talk.rate) || req.body.talk.rate < 1
        || req.body.talk.rate > 5) {
        return res.status(400).json({
            message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
        });
    } 
    
      next();
};

module.exports = {
    validationTalkerToken,
    validationTalkerName,
    validationTalkerAge,
    validationTalkerTalk,
    validationTalkerWatchedAt,
    validationTalkerRate,
};