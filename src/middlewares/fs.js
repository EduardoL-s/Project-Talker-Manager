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

const writeAlterationInTalker = async (talkersAfterAlteration) => {
    try {
        const newTalkerList = JSON.stringify([...talkersAfterAlteration], null, 2);
        await fs.writeFile(path.resolve(__dirname, '../talker.json'), newTalkerList);
    } catch (error) {
        console.log(`Erro ao tentar alterar o arquivo: ${error}`);
    }
};

const writeForDeleteTalker = async (withoutRemoved) => {
    try {
        const talkerLeft = JSON.stringify([...withoutRemoved], null, 2);
        await fs.writeFile(path.resolve(__dirname, '../talker.json'), talkerLeft);
    } catch (error) {
        console.log(`Erro ao tentar deletar algo no arquivo: ${error}`);
    }
};

module.exports = {
    readAllTalkers,
    writeNewTalker,
    writeAlterationInTalker,
    writeForDeleteTalker,
};