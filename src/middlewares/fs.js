const fs = require('fs').promises;
const path = require('path');

const readAllTalkers = async () => {
    try {
        const data = await fs.readFile(path.resolve(__dirname, '../talker.json'), 'utf-8');
        const talkers = JSON.parse(data);
        return talkers;
    } catch (error) {
        console.log(`Erro ao ler o arquivo: ${error}`);
    }
};

const writeNewTalker = async (newTalker) => {
    try {
        const oldTalkers = await readAllTalkers();
        const addTalker = JSON.stringify([...oldTalkers, newTalker], null, 2);

        await fs.writeFile(path.resolve(__dirname, '../talker.json'), addTalker);
    } catch (error) {
        console.log(`Erro ao escrever no arquivo: ${error}`);
    }
};

module.exports = {
    readAllTalkers,
    writeNewTalker,
};