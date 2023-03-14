import React from "react";

import { Button, UploadcareImage, WorkDetails } from "@/components/index";

export const MacOSFinder: React.FC = () => (
  <div className="flex flex-col gap-20 pt-56 pb-20">
    <div className="flex w-screen flex-col items-center gap-5">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <video
              className="absolute top-0 left-0 h-full w-full"
              controls
              src="/videos/hydra.mp4"
            />
          </div>
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Hydra</h3>
          <small>
            Hydra&apos;s representation of head regeneration through UI
          </small>
          <small>
            The black hole on the desktop represents an intriguing intersection
            between technology and the unknown, raising questions about the
            nature of information and its relationship to physical space.
          </small>
          <Button as="a" href="/files/hydra.zip" size="sm" variant="primary">
            Download script (zip 2.9 KB)
          </Button>
          <time dateTime="2014">2014</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex w-screen flex-col items-center gap-5">
      <div className="sm:w-screen md:w-screen lg:w-5/6 xl:w-4/6">
        <UploadcareImage
          alt="Finder From the Side"
          src="https://ucarecdn.com/709e82ee-6077-4d12-9208-5a339714e0ca/"
        />
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Finder From the Side</h3>
          <time dateTime="2022">2022</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex w-screen flex-col items-center gap-5">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <video
              className="absolute top-0 left-0 h-full w-full"
              controls
              src="/videos/dropbox-to-iCloud.mp4"
            />
          </div>
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Dropbox ⟶ iCloud</h3>
          <time dateTime="2022">2022</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex w-screen flex-col items-center gap-5">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <video
              className="absolute top-0 left-0 h-full w-full"
              controls
              src="/videos/matryoshka.mp4"
            />
          </div>
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Matryoshka</h3>
          <time dateTime="2017">2017</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex w-screen flex-col items-center gap-5">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <video
              className="absolute top-0 left-0 h-full w-full"
              controls
              src="//player.vimeo.com/video/40102765"
            />
          </div>
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>The Dice Game</h3>
          <small>
            Normal folder in Preview mode shows previews of the image files, two
            in our case. Script copes such two images
            <mark>randomly</mark>
            and gives a combination of two dices.
          </small>
          <small>
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
          </small>
          <a href="https://github.com/keske/Mac-OS-UI-Games/blob/master/dicegame.zip?raw=true">
            <Button size="sm">Download game (34Kb)</Button>
          </a>
          <time dateTime="2011">2011</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex w-screen flex-col items-center gap-5">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <video
              className="absolute top-0 left-0 h-full w-full"
              controls
              src="//player.vimeo.com/video/40103163"
            />
          </div>
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Slot Machines</h3>
          <small>
            3 slots, each has a set of pictures. The aim of the game is to get 3
            the same pictures. In my game each slot is the simple folder in
            <mark>Cover Flow</mark>
            mode and in contrast WI the original game the movement of the slots
            is horizontal.
          </small>
          <small>
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
                will be randomly copied 600 times to the folders first, second
                mad third
                <br />$ php game.php
              </li>
            </ul>
          </small>
          <a href="https://github.com/keske/Mac-OS-UI-Games/blob/master/slotmachine.zip?raw=true">
            <Button>Download game (34Kb)</Button>
          </a>
          <time dateTime="2011">2011</time>
        </div>
      </WorkDetails>
    </div>
  </div>
);
