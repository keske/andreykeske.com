import React from 'react';

export default () => (
  <div>
    <h1>
      Mac OS UI Games
    </h1>
    <p>
      Two rather simple games, but based on the Mac OS X Interface. This approach shows how the things you are used to, obtain new meaning. My games is continuation of finding the way of interaction between the OS and the user on levels that are slightly noticeable at first sight.
    </p>

    <hr />

    <h1>
      Slot Machines
    </h1>
    <p>
      3 slots, each has a set of pictures. The aim of the game is to get 3 the same pictures. In my game each slot is the simple folder in Cover Flow mode and in contrast WI the original game the movement of the slots is horizontal.
    </p>

    <iframe
      src="//player.vimeo.com/video/40103163"
      width="100%"
      height="430"
      frameBorder="0"
      allowFullScreen
    />

    <h2>
      How to play
    </h2>

    <ul>
      <li>
        Open Terminal
        <br />
        $ cd path-to-game/
      </li>
      <li>
        Open 3 folders and place them on below the other.
        <br />
        $ open first/
        <br />
        $ open second/
        <br />
        $ open third/
      </li>
      <li>
        Run game.php script. After that pictures from the source folder will be randomly copied 600 times to the folders first, second mad third
        <br />
        $ php game.php
      </li>
    </ul>

    <p>
      Now you can play. Ideally with the trackpad.
    </p>

    <h4>
      <a href="https://github.com/keske/Mac-OS-UI-Games/blob/master/slotmachine.zip?raw=true">
        Download game (34Kb)
      </a>
    </h4>

    <hr />

    <h1>
      Dice game
    </h1>

    <p>
      Very simple. Normal folder in Preview mode shows previews of the image files, two in our case. Script copes such two images randomly and gives a combination of two dices.
    </p>

    <iframe
      src="//player.vimeo.com/video/40102765"
      width="100%"
      height="430"
      frameBorder="0"
      allowFullScreen
    />

    <h2>
      How to play
    </h2>

    <ul>
      <li>
        Open folder and set Preview mode
      </li>
      <li>
        Open Terminal
        <br />
        $ cd path-to-game/
      </li>
      <li>
        Run the game ($ php game.php)
      </li>
      <li>
        Each roll is a script run
      </li>
    </ul>

    <h4>
      <a href="https://github.com/keske/Mac-OS-UI-Games/blob/master/dicegame.zip?raw=true">
        Download game (34Kb)
      </a>
    </h4>
  </div>
);
