/* eslint-disable */

const fs = require('fs');

const DELAY = 100;

(() => {
  let heads = 0;

  const getSpaces = (total) => {
    let spaces = ' ';

    [...Array(total).keys()].map(() => {
      spaces += ' ';
    });

    return spaces;
  };

  const copyFile = async (dest) => {
    await fs.promises.copyFile('./🐲', dest);
  };

  const copyFiles = async (total) => {
    await Promise.all(
      [...Array(total).keys()].map(async (index) => {
        const spaces = getSpaces(heads + index);

        await copyFile(`./Hydra/🐲${spaces}`);
      }),
    );
  };

  const main = async () => {
    const files = await fs.promises.readdir('./Hydra');

    const totalFiles = files.length - 1; // .DS_Store

    if (totalFiles < heads) {
      await copyFiles(2);

      heads = totalFiles + 2;
    }

    setTimeout(() => {
      main();
    }, DELAY);
  };

  const init = async () => {
    const initialTotalHeads = 3;

    await copyFiles(initialTotalHeads);

    heads = initialTotalHeads;

    main();
  };

  init();
})();
