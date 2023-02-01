import React from "react";

type Props = {
  selectedCaseId?: string | null;
};

export const EnergyOrParticle: React.FC<Props> = ({ selectedCaseId }) => (
  <div className="flex flex-col py-80">
    <div className="flex flex-col items-center gap-5">
      <div className="aspect-w-16 aspect-h-4 w-1/2">
        <iframe
          allow="loop"
          className="border-0"
          src="/videos/energy-or-particle.mp4"
          title="Ball in the Dock"
        />
      </div>
      {selectedCaseId && (
        <p>
          Light behaves <mark>as a wave and as a particle</mark>, depending on
          the circumstances and the effect being observed
          <time dateTime="2018">2018</time>
        </p>
      )}
    </div>
  </div>
);
