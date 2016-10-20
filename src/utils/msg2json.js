import { removeSymbols } from './removeSymbols';

export const msg2array = (res) => {
  const splitted = res.text
    .replace(/[^\x20-\x7E]+/g, '::').split('::');

  const array = [];

  for (let i = 0; i < splitted.length; i++) {
    if (i > 2) {
      array.push(removeSymbols(splitted[i]));
    }
  }

  return array;
};

export const msg2json = (res) => {
  const splitted = res.text
    .replace(/[^\x20-\x7E]+/g, '::').split('::');

  let obj = {};

  for (let i = 0; i < splitted.length; i = i + 2) {
    if (i > 0) {
      obj = {
        ...obj,
        [removeSymbols(splitted[i - 1])]: [removeSymbols(splitted[i])],
      };
    }
  }

  return obj;
};
