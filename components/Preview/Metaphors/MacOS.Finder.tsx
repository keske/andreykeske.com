import React from "react";

import { Button, UploadcareImage } from "@/components/index";

export const MacOSFinder: React.FC = () => (
  <div className="flex flex-col gap-40 p-80">
    <div className="flex flex-col gap-10">
      <h4 className="text-center text-3xl">Hydra</h4>
      <div className="flex flex-col items-center gap-5">
        <div className="aspect-w-16 aspect-h-4 w-1/2">
          <iframe
            allow="loop"
            className="border-0"
            src="/videos/hydra.mp4"
            title="Hydra"
          />
        </div>
        <p className="text-center">
          Hydra&apos;s representation of head regeneration through UI
        </p>
        <Button as="a" href="/files/hydra.zip" size="sm" variant="primary">
          Download script (zip 2.9 KB)
        </Button>
        <time dateTime="2014">2014</time>
      </div>
    </div>
    <hr />
    <div className="flex flex-col gap-10">
      <h4 className="text-center text-3xl">Finder From the Side</h4>
      <div className="flex w-1/2 flex-col items-center gap-5 self-center">
        <UploadcareImage
          alt="Finder From the Side"
          src="https://ucarecdn.com/709e82ee-6077-4d12-9208-5a339714e0ca/"
        />
        <time dateTime="2022">2022</time>
      </div>
    </div>
    <hr />
    <div className="flex flex-col gap-10">
      <h4 className="text-center text-3xl">Dropbox ⟶ iCloud</h4>
      <div className="flex flex-col items-center gap-5">
        <div className="aspect-w-16 aspect-h-4 w-1/2">
          <iframe
            allow="loop"
            className="border-0"
            src="/videos/dropbox-to-iCloud.mp4"
            title="Dropbox To iCloud"
          />
        </div>
        <time dateTime="2022">2022</time>
      </div>
    </div>
    <hr />
    <div className="flex flex-col gap-10">
      <h4 className="text-center text-3xl">Matryoshka</h4>
      <div className="flex flex-col items-center gap-5">
        <div className="aspect-w-16 aspect-h-4 w-1/2">
          <iframe
            allow="loop"
            className="border-0"
            src="/videos/matryoshka.mp4"
            title="Matryoshka"
          />
        </div>
        <time dateTime="2017">2017</time>
      </div>
    </div>
    <hr />
    <div className="flex flex-col gap-10">
      <h4 className="text-center text-3xl">The Shell Game</h4>
      <div className="flex flex-col items-center gap-5">
        <div className="aspect-w-16 aspect-h-4 w-1/2">
          <iframe
            allow="loop"
            className="border-0"
            src="/videos/shell-game.mp4"
            title="The Shell Game"
          />
        </div>
        <time dateTime="2012">2012</time>
      </div>
    </div>
    <hr />
    <div className="flex flex-col gap-10">
      <h4 className="text-center text-3xl">The Dice Game</h4>
      <div className="flex flex-col items-center gap-5">
        <div className="aspect-w-16 aspect-h-4 w-1/2">
          <iframe
            allow="loop"
            className="border-0"
            src="//player.vimeo.com/video/40102765"
            title="The Dice Game"
          />
        </div>
        <div>
          <p>
            Very simple. Normal folder in Preview mode shows previews of the
            image files, two in our case. Script copes such two images
            <mark>randomly</mark>
            and gives a combination of two dices.
          </p>
          <p>How to play</p>
          <ul>
            <li>Open folder and set Preview mode</li>
            <li>
              Open Terminal
              <br />$ cd path-to-game/
            </li>
            <li>Run the game ($ php game.php)</li>
            <li>Each roll is a script run</li>
          </ul>
          <a href="https://github.com/keske/Mac-OS-UI-Games/blob/master/dicegame.zip?raw=true">
            <Button>Download game (34Kb) →</Button>
          </a>
        </div>
        <time dateTime="2011">2011</time>
      </div>
    </div>
    <hr />
    <div className="flex flex-col gap-10">
      <h4 className="text-center text-3xl">Slot Machines</h4>
      <div className="flex flex-col items-center gap-5">
        <div className="aspect-w-16 aspect-h-4 w-1/2">
          <iframe
            allow="loop"
            className="border-0"
            src="//player.vimeo.com/video/40103163"
            title="Slot Machines"
          />
        </div>
        <div>
          <p>
            3 slots, each has a set of pictures. The aim of the game is to get 3
            the same pictures. In my game each slot is the simple folder in
            <mark>Cover Flow</mark>
            mode and in contrast WI the original game the movement of the slots
            is horizontal.
          </p>
          <p>How to play</p>
          <ul>
            <li>
              Open Terminal
              <br />$ cd path-to-game/
            </li>
            <li>
              Open 3 folders and place them on below the other.
              <br />
              $ open first/
              <br />
              $ open second/
              <br />$ open third/
            </li>
            <li>
              Run game.php script. After that pictures from the source folder
              will be randomly copied 600 times to the folders first, second mad
              third
              <br />$ php game.php
            </li>
          </ul>
          <a href="https://github.com/keske/Mac-OS-UI-Games/blob/master/slotmachine.zip?raw=true">
            <Button>Download game (34Kb) →</Button>
          </a>
        </div>
        <time dateTime="2011">2011</time>
      </div>
    </div>
  </div>
);
