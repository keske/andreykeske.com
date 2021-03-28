'use strict';

const fs = require('fs');

const DELAY = 100;

(() => {
  let heads = 0;

  const getSpaces = (total) => {
    let spaces = ' ';

    [...Array(total).keys()].map(() => {
      spaces = spaces + ' ';
    });

    return spaces;
  };

  const copyFile = async (dest /* string */) /* Promise */ => {
    await fs.promises.copyFile('./🐲', dest);
  };

  const main = async () => {
    const files = await fs.promises.readdir('./Hydra');

    const totalFiles = files.length - 1; // .DS_Store

    if (totalFiles < heads) {
      Promise.all(
        [...Array(2).keys()].map(async (index) => {
          const spaces = getSpaces(heads + index);

          await copyFile(`./Hydra/🐲${spaces}`);
        }),
      );

      heads = totalFiles + 2;
    }

    setTimeout(() => {
      main();
    }, DELAY);
  };

  const init = () => {
    const initialTotalHeads = 3;

    Promise.all(
      [...Array(initialTotalHeads).keys()].map(async (index) => {
        const spaces = getSpaces(heads + index);

        await copyFile(`./Hydra/🐲${spaces}`);
      }),
    );

    heads = initialTotalHeads;

    main();
  };

  init();
})();
