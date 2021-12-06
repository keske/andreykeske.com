/* eslint-disable */

const fs = require('fs');

const DELAY = 100;

(() => {
  const main = async () => {
    const files = await fs.promises.readdir('~/Desktop');

    const totalFiles = files.length - 1; // .DS_Store

    console.log(totalFiles);

    setTimeout(() => {
      main();
    }, DELAY);
  };

  const init = async () => {
    main();
  };

  init();
})();
