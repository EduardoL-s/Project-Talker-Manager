const { Router } = require('express');
const {
    validationTalkerToken,
    validationTalkerName,
    validationTalkerAge,
    validationTalkerTalk,
    validationTalkerWatchedAt,
    validationTalkerRate,
    // readAllTalkers,
    writeNewTalker,
} = require('../middlewares');

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

talkerRouter.post('/',
validationTalkerToken,
validationTalkerName,
validationTalkerAge,
validationTalkerTalk,
validationTalkerWatchedAt,
validationTalkerRate,
async (req, res) => {
    let newId = talker[talker.length - 1].id;

    const newTalker = {
        id: newId += 1,
        name: req.body.name,
        age: req.body.age,
        talk: {
            watchedAt: req.body.talk.watchedAt,
            rate: req.body.talk.rate,
        },
    };

    await writeNewTalker(newTalker);

    talker.push(newTalker);
    return res.status(201).json(talker[talker.length - 1]);
});

module.exports = {
    talkerRouter,
};