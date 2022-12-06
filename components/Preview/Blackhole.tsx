import React from "react";

const Blackhole = () => (
  <div className="absolute top-0 left-0 h-screen w-screen justify-center">
    <div className="flex h-screen w-screen flex-col items-center gap-10 p-20">
      <div>
        <h2>Black hole on my Desktop. Part I</h2>
        <p>
          In the space of my Desktop was noticed a black hole where the any
          information or object will be removed forever
        </p>
      </div>
      <iframe
        allow="loop"
        className="h-full w-1/2 border-0"
        src="/videos/blackhole-1.mp4"
        title="Blackhole"
      />
    </div>
    <div className="flex h-screen w-screen flex-col items-center gap-10 p-20">
      <div>
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
      <iframe
        allow="loop"
        className="h-full w-1/2 border-0"
        src="/videos/blackhole-2.mp4"
        title="Blackhole"
      />
    </div>
  </div>
);

export default Blackhole;
