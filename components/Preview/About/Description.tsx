import React from "react";

import { Stack } from "@/components";

export const Description: React.FC = () => (
  <Stack
    className="h-screen items-center justify-center py-60"
    gap={10}
  >
    <Stack
      className="w-1/2 px-10 text-2xl font-black uppercase md:w-2/3 lg:w-1/2 xl:w-1/2"
      gap={5}
    >
      <p>
        Andrey Keske is a digital artist and software engineer with a
        degree in computer science.
      </p>
      <p>
        He began his artistic journey in 2006 by creating graffiti,
        which evolved into making stickers and graphic designs.
      </p>
      <p>
        Graffiti, a form of street art, can be seen as a type of
        hacking, and Andrey's interest in computer hacking culture and
        programming led to a convergence of these two activities.
      </p>
      <p>
        This convergence ultimately led him to create net-art, which
        is represented on this site.
      </p>
      <p>
        Launched{" "}
        <a href="https://apps.apple.com/us/app/w1d1/id1497155726">
          W1D1
        </a>
      </p>
      <p>
        Worked with <a href="https://www.airbnb.com">Airbnb</a>,{" "}
        <a href="https://www.jupe.com">Jupe</a>,{" "}
        <a href="https://opolis.co">Opolis</a>,{" "}
        <a href="https://untitledinbrackets.com">[Untitled]</a>,{" "}
        <a href="https://joinstorkclub.com">Stork Club</a>,{" "}
        <a href="https://www.fridgenomore.com">Fridge No More</a>
      </p>
    </Stack>
    <small>
      This site is{" "}
      <a href="https://github.com/keske/andreykeske.com">
        open sourced
      </a>
    </small>
  </Stack>
);
