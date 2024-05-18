import React from "react";

import { WorkDetails } from "@/components/index";

export const MacOSDesktop: React.FC = () => (
  <div className="flex flex-col gap-20 pb-20 pt-56">
    <div className="flex w-screen flex-col items-center gap-5">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div
            className="relative"
            style={{ paddingBottom: "56.25%" }}
          >
            <video
              className="absolute left-0 top-0 size-full"
              controls
              src="/videos/blackhole-1.mp4"
            />
          </div>
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Black hole on my Desktop. Part I</h3>
          <small>
            This mysterious void appears on the computer screen as a
            black circle, and any information or object that falls
            into it is seemingly removed from existence forever.
          </small>
          <small>
            The black hole on the desktop represents an intriguing
            intersection between technology and the unknown, raising
            questions about the nature of information and its
            relationship to physical space.
          </small>
          <time dateTime="2019">2019</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex w-screen flex-col items-center gap-5">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div
            className="relative"
            style={{ paddingBottom: "56.25%" }}
          >
            <video
              className="absolute left-0 top-0 size-full"
              controls
              src="/videos/blackhole-2.mp4"
            />
          </div>
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Black hole on my Desktop. Part II</h3>
          <small>
            The exhibit is inspired by the theory of Hawking
            radiation, which suggests that quantum perturbations of
            the event horizon could allow information to escape from a
            black hole
          </small>
          <time dateTime="2021">2021</time>
        </div>
      </WorkDetails>
    </div>
  </div>
);
