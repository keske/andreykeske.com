import React from "react";

export const Description: React.FC = () => (
  <div className="flex h-screen flex-col items-center justify-center gap-10 py-60">
    <div className="flex w-1/2 flex-col gap-5 px-10 md:w-2/3 lg:w-1/2 xl:w-1/2">
      <p>
        Andrey Keske is a digital artist and software engineer with a degree in
        computer science. He began his artistic journey in 2006 by creating
        graffiti, which evolved into making stickers and graphic designs.
        Graffiti, a form of street art, can be seen as a type of hacking, and
        Andrey's interest in computer hacking culture and programming led to a
        convergence of these two activities. This convergence ultimately led him
        to create net-art, which is represented on this site.
      </p>
      <p>
        In addition to his work in net-art, Andrey also works as a software
        engineer for companies such as Airbnb. His successful startup,{" "}
        <a href="https://apps.apple.com/us/app/w1d1/id1497155726">W1D1</a>, was
        launched in 2020.
      </p>
      <p>
        Andrey currently splits his time between two cities: New York City, NY,
        and Miami, FL, where he resides.
      </p>
      <small>
        This site is{" "}
        <a href="https://github.com/keske/andreykeske.com">open sourced</a>
      </small>
    </div>
  </div>
);
