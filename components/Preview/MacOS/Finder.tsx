import React from "react";

import { Button, UploadcareImage } from "@/components/index";

export const Finder: React.FC = () => (
  <div className="flex flex-col gap-40">
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
  </div>
);
