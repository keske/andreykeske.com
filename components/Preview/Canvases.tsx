import React from "react";

const Canvases = () => (
  <div className="absolute top-0 left-0 h-screen w-screen">
    <div className="flex flex-col items-center gap-10 p-20">
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
        <img
          alt="Keske, Scheme, Keske, 2009 (acrylic on canvas)"
          className="w-full"
          src={`/photos/canvases/0.jpg`}
        />
        <p>
          Keske, Scheme, Keske, 2009{" "}
          <span className="opacity-30">(acrylic on canvas)</span>
        </p>
      </div>
      <div className="md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/4">
        <img
          alt="Keske, 2006 (oil on canvas)"
          className="w-full"
          src={`/photos/canvases/1.jpg`}
        />
        <p>
          Keske, 2006 <span className="opacity-30">(oil on canvas)</span>
        </p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, 2009 (acrylic on wood)"
          className="w-full"
          src={`/photos/canvases/2.jpg`}
        />
        <p>
          Keske, 2009 <span className="opacity-30">(acrylic on wood)</span>
        </p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, 2009 (acrylic on wood)"
          className="w-full"
          src={`/photos/canvases/3.jpg`}
        />
        <p>
          Keske, 2009 <span className="opacity-30">(acrylic on wood)</span>
        </p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
        <img
          alt="Keske, 2009 (acrylic on wood)"
          className="w-full"
          src={`/photos/canvases/4.jpg`}
        />
        <p>
          Keske, 2009 <span className="opacity-30">(acrylic on wood)</span>
        </p>
      </div>
    </div>
  </div>
);

export default Canvases;
