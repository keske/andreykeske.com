import React from "react";

const Mobile: React.FC = () => (
  <>
    <div className="flex h-screen flex-col justify-center gap-5 p-10 md:hidden">
      <p>
        Andrey Keske is a digital artist and software engineer with a
        degree in computer science. He began his artistic journey in
        2006 by creating graffiti, which evolved into making stickers
        and graphic designs. Graffiti, a form of street art, can be
        seen as a type of hacking, and Andrey's interest in computer
        hacking culture and programming led to a convergence of these
        two activities. This convergence ultimately led him to create
        net-art, which is represented on this site.
      </p>
      <p>
        In addition to his work in net-art, Andrey also works as a
        software engineer for companies such as Airbnb. His successful
        startup,{" "}
        <a href="https://apps.apple.com/us/app/w1d1/id1497155726">
          W1D1
        </a>
        , was launched in 2020.
      </p>
      <p>
        Andrey currently splits his time between two cities: New York
        City, NY, and Miami, FL, where he resides.
      </p>
      <div className="flex flex-row gap-5">
        <a href="mailto://hello@andreykeske.com">Mail</a>
        <a href="https://github.com/keske">Github</a>
        <a href="https://www.instagram.com/andreykeske/">Instagram</a>
        <a href="https://www.goodreads.com/user/show/63547727-andrey-keske">
          Good Reads
        </a>
      </div>
    </div>
  </>
);

export default Mobile;
