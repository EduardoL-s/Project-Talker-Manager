const { readAllTalkers, writeNewTalker, editTalker } = require('./fs');
const { validationLoginEmail, validationLoginPassword } = require('./loginValidations');
const {
    validationTalkerToken,
    validationTalkerName,
    validationTalkerAge,
    validationTalkerTalk,
    validationTalkerWatchedAt,
    validationTalkerRate,
} = require('./talkerPostValidations');

module.exports = {
    validationLoginEmail,
    validationLoginPassword,
    validationTalkerToken,
    validationTalkerName,
    validationTalkerAge,
    validationTalkerTalk,
    validationTalkerWatchedAt,
    validationTalkerRate,
    readAllTalkers,
    writeNewTalker,
    editTalker,
};