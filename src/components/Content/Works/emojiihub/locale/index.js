const Counterpart = require('counterpart').Instance;
const Language = new Counterpart();

Language.registerTranslations('en', require('./En'));
Language.registerTranslations('ru', require('./Ru'));

module.exports = Language;
