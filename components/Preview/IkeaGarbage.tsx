import React from "react";

const IkeaGarbage = () => (
  <div className="absolute top-0 left-0 flex h-screen w-screen justify-center">
    <iframe
      className="w-1/4 border-0 2xl:w-1/5"
      src="/videos/ikea.mp4"
      title="The first discarded piece of IKEA furniture in Augmented Reality"
    />
    <p className="absolute right-10 bottom-10">
      Made in{" "}
      <a href="https://apps.apple.com/us/app/ikea-place/id1279244498">
        IKEA Place
      </a>
    </p>
  </div>
);

export default IkeaGarbage;
