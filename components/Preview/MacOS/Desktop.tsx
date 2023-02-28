import React from "react";

export const Desktop: React.FC = () => (
  <>
    <div className="flex flex-col items-center gap-10 p-80">
      <div>
        <h2>Black hole on my Desktop. Part I</h2>
        <p>
          In the space of my Desktop was noticed a black hole where the any
          information or object will be removed forever
        </p>
      </div>

      <div className="aspect-w-16 aspect-h-4 w-1/2">
        <iframe
          allow="loop"
          className="border-0"
          src="/videos/blackhole-1.mp4"
          title="Blackhole"
        />
      </div>
    </div>
    <div className="flex flex-col items-center gap-10 p-20">
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
      <div className="aspect-w-16 aspect-h-4 w-1/2">
        <iframe
          allow="loop"
          className="border-0"
          src="/videos/blackhole-2.mp4"
          title="Blackhole"
        />
      </div>
    </div>
  </>
);
