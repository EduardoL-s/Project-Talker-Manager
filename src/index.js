const express = require('express');

const talker = require('./talker.json');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', (req, res) => {
  res.status(200).json(talker);
});

app.get('/talker/:id', (req, res) => {
  const { params: { id: urlId } } = req;
  const palestrante = talker.find(({ id }) => id === Number(urlId));
  if (palestrante) {
    res.status(200).json(palestrante);
  } else {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
