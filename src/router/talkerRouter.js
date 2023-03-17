const { Router } = require('express');

const talker = require('../talker.json');

const talkerRouter = Router();

talkerRouter.get('/', (req, res) => {
    res.status(200).json(talker);
  });
  
talkerRouter.get('/:id', (req, res) => {
    const { params: { id: urlId } } = req;
    const palestrante = talker.find(({ id }) => id === Number(urlId));
    if (palestrante) {
      res.status(200).json(palestrante);
    } else {
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
  });

module.exports = {
    talkerRouter,
};