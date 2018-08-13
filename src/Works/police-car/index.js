import React from 'react';

export default () => (
  <div>
    <h1>
      Police Siren Alarm animation in OS X Finder
    </h1>
    <p>
      As you know the OS X gives the opportunity to set image folder as background and set colour labels for folders and files. Also that can be done from Terminal. What if we make animation from this labels?
    </p>
    <h2>
      How it's works
    </h2>
    <p>
      So, how to set it up: open index.html in your browser, it has Javascript sending request to cmd.php every 2.5 seconds, which actually does the command. The command is pretty simple and looks like ./label.sh [color] [file]. File label.sh sets the Finder labels.
    </p>
    <iframe
      width="100%"
      height="450"
      src="//www.youtube.com/embed/WrUCOit8adQ"
      frameBorder="0"
      allowFullScreen
    />
    <h2>
      Repeat this effect on your computer
    </h2>
    <ul>
      <li>
        Move the police folder in «DocumentRoot» folder;
      </li>
      <li>
        Open the police folder where there is two folders with «,,,,,,,,,,» and «,,,,,,,,,,,». Set image as background, press ⌘J. Select police.jpg;
      </li>
      <li>
        Start http server;
      </li>
      <li>
        Open in Finder the police folder and change view option to «Show items as icons» (Press ⌘1);
      </li>
      <li>
        In the browser open your link to the police folder (for example: http://localhost/police);
      </li>
      <li>
        And last, press Alt+Tab to show finder window with our police folder.
      </li>
    </ul>
  </div>
);
