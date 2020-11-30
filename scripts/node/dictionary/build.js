const path = require('path');
const { REPO_ROOT } = require('../constants');

const StyleDictionary = require('style-dictionary').extend(
  path.resolve(REPO_ROOT, 'dictionary.config.json')
);

const filters = require('./filters');
const transforms = require('./transforms');
const formats = require('./formats');

const fancyLog = (msg) => {
  const logHR = `${new Array(msg.length).fill('~').join('')}`;
  console.log(`\n${logHR}`);
  console.log(msg);
  console.log(logHR);
};

filters.forEach((f) => {
  console.log(`Registering filter ${f.name}`);
  StyleDictionary.registerFilter(f);
});

transforms.forEach((t) => {
  console.log(`Registering transform ${t.name}`);
  StyleDictionary.registerTransform(t);
});

formats.forEach((f) => {
  console.log(`Registering format ${f.name}`);
  StyleDictionary.registerFormat(f);
});

fancyLog('💅 📖 Building distributions with style-dictionary 📖 💅');
StyleDictionary.buildAllPlatforms();
