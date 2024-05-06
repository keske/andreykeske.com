import React from "react";

const awards = [
  {
    platform: {
      link: "https://apps.apple.com/us/app/w1d1/id1497155726",
      name: "Multiply as App of the Day on the App Store",
    },
    product: {
      link: "https://w1d1.com",
      name: "W1D1",
    },
    role: "CTO",
  },
  {
    platform: {
      link: "https://www.siteinspire.com/websites/11295-samara",
      name: "Siteinspire",
    },
    product: {
      link: "https://www.samara.com",
      name: "Samara",
    },
    role: "Full Stack Engineer",
  },
];

export const Awards: React.FC = () => (
  <div className="flex h-screen flex-col items-center justify-center gap-10">
    {awards.map((award, index) => (
      <div className="flex w-1/3 flex-col gap-2" key={index}>
        <div className="flex flex-col">
          <p className="font-thin opacity-70">Name</p>
          <a className="text-white" href={award.product.link}>
            <h3>
              {award.product.name}
              {/* <sup className="ml-1 mt-1 text-[8px]">↗︎</sup> */}
            </h3>
          </a>
        </div>
        <div className="flex flex-col">
          <p className="font-thin opacity-70">Platform</p>
          <a href={award.platform.link}>
            <a className="text-white">
              {award.platform.name}
              {/* <sup className="ml-1 mt-1 text-[8px]">↗︎</sup> */}
            </a>
          </a>
        </div>
        <div className="flex flex-col">
          <p className="font-thin opacity-70">Role</p>
          <h3>{award.role}</h3>
        </div>
      </div>
    ))}
  </div>
);
