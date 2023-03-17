const { Router } = require('express');
const {
    validationTalkerToken,
    validationTalkerName,
    validationTalkerAge,
    validationTalkerTalk,
    validationTalkerWatchedAt,
    validationTalkerRate,
    readAllTalkers,
    writeNewTalker,
    writeForDeleteTalker,
} = require('../middlewares');

const talker = require('../talker.json');

const talkerRouter = Router();

talkerRouter.get('/', async (req, res) => {
    const allTalkers = await readAllTalkers();
    res.status(200).json(allTalkers);
  });
  
talkerRouter.get('/:id', async (req, res) => {
    const allTalkers = await readAllTalkers();
    const { params: { id: urlId } } = req;
    const palestrante = allTalkers.find(({ id }) => id === Number(urlId));
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
    const allTalkers = await readAllTalkers();
    let newId = allTalkers[allTalkers.length - 1].id;

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

talkerRouter.delete('/:id', validationTalkerToken, async (req, res) => {
  const allTalkers = await readAllTalkers();
  const { id: urlId } = req.params;
  const talkerLeft = allTalkers.filter(({ id }) => id !== Number(urlId));

  await writeForDeleteTalker(talkerLeft);

  return res.status(204).end();
});

module.exports = {
    talkerRouter,
};