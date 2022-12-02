import React from "react";

const IkeaGarbage = () => (
  <div className="absolute top-0 left-0 flex h-screen w-screen justify-center">
    <iframe className="border-0" src="/videos/ikea.mp4" title="Globalization" />
    <p className="absolute right-10 bottom-10">
      Made in{" "}
      <a href="https://apps.apple.com/us/app/ikea-place/id1279244498">
        IKEA Place
      </a>
    </p>
  </div>
);

export default IkeaGarbage;
