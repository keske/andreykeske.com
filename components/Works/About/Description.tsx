import React from "react";

export const Description: React.FC = () => (
  <div className="flex h-screen flex-col items-center justify-center gap-10 py-60">
    <div className="flex w-1/2 flex-col gap-5 px-10 text-2xl font-black uppercase md:w-2/3 lg:w-1/2 xl:w-1/2">
      <p>
        I’m a founding full-stack engineer who loves building polished
        products—with a sharp eye on UX, simplicity, and design. I’ve
        helped YC-backed startups turn early ideas into real,
        user-facing products.
      </p>
      <p>
        I’ve helped build award-winning products featured on
        Siteinspire, the App Store (App of the Day), and Product Hunt
        (Product of the Day), working as part of fast-paced,
        high-performing teams.
      </p>
    </div>
    <small>
      This site is{" "}
      <a href="https://github.com/keske/andreykeske.com">
        open sourced
      </a>
    </small>
  </div>
);
