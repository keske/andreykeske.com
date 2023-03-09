import React from "react";

export const MacOSDesktop: React.FC = () => (
  <div className="flex flex-col justify-center gap-40 py-60">
    <div className="flex flex-col items-center gap-5">
      <div className="aspect-w-16 aspect-h-4 w-1/2">
        <iframe
          allow="loop"
          className="border-0"
          src="/videos/blackhole-1.mp4"
          title="Blackhole"
        />
      </div>
      <p>
        Black hole on my Desktop. Part I
        <br />
        <small>
          In the space of my Desktop was noticed a black hole where the any
          information or object will be removed forever
        </small>
      </p>
      <time dateTime="2013">2013</time>
    </div>

    <div className="flex flex-col items-center gap-5">
      <div className="aspect-w-2 aspect-h-1 w-screen xl:aspect-w-2 xl:aspect-h-1 2xl:aspect-w-3 2xl:aspect-h-1">
        <iframe
          allow="loop"
          className="border-0"
          src="/videos/blackhole-1.mp4"
          title="Blackhole"
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <small>
          <p>Black hole on my Desktop. Part I</p>
          <p>
            In the space of my Desktop was noticed a black hole where the any
            information or object will be removed forever
          </p>
        </small>
      </div>
    </div>

    <hr />

    <div className="flex flex-col gap-10">
      <div className="flex w-full flex-col items-center">
        <h2>Black hole on my Desktop. Part II. With Hawking radiation</h2>
        <p>
          When I move a file on the Desktop, it disappears, but a side effect of
          it is a new file with part of the information.
        </p>
        <p>
          <a href="https://en.wikipedia.org/wiki/Black_hole_information_paradox">
            &quot;...theory that quantum perturbations of the event horizon
            could allow information to escape from a black hole...&quot;
          </a>
        </p>
      </div>
      <div className="aspect-w-2 aspect-h-1 w-screen xl:aspect-w-2 xl:aspect-h-1 2xl:aspect-w-3 2xl:aspect-h-1">
        <iframe
          allow="loop"
          className="border-0"
          src="/videos/blackhole-2.mp4"
          title="Blackhole"
        />
      </div>
    </div>
  </div>
);
