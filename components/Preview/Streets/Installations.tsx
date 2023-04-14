import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

import { UploadcareImage, WaterSurface } from "@/components/index";

type SceneProps = any;

export const Scene = React.forwardRef<HTMLCanvasElement, SceneProps>(
  (props, ref) => {
    const handleAnimateUniform = React.useCallback(
      (delta: number) => delta / 7,
      [],
    );

    return (
      <Canvas
        camera={{ position: [0, 10, 10] }}
        className="h-screen w-screen"
        ref={ref}
      >
        <Sky
          azimuth={0.15}
          distance={150000}
          inclination={0}
          sunPosition={[0, 1, 20]}
        />
        <WaterSurface
          animateUniform={handleAnimateUniform}
          waterOptions={{
            waterColor: "#000000",
          }}
        />
      </Canvas>
    );
  },
);

export const Installations: React.FC = () => (
  <>
    <div className="fixed left-0 top-0 h-full w-screen overflow-hidden">
      <Scene />
    </div>
    <div className="relative z-10 w-screen py-40">
      <div className="flex flex-col items-center gap-10 p-20">
        <div className="flex w-1/3 flex-col gap-1 sm:w-full sm:p-10 md:w-full lg:w-1/2">
          <UploadcareImage
            alt="Water Filter"
            src="https://ucarecdn.com/2db57ca1-3de1-45aa-bb48-08c17eaa2433/"
          />
        </div>
        <div className="flex w-1/3 flex-col gap-1 sm:w-full sm:p-10 md:w-full lg:w-1/2">
          <UploadcareImage
            alt="Water Filter"
            src="https://ucarecdn.com/d9922bd6-54c3-49ca-aa12-dc371d09cbca/"
          />
        </div>
      </div>
      <p className="fixed bottom-10 right-10 text-right text-white">
        Street installation
        <br />
        The water filter in an unusual situation
      </p>
    </div>
  </>
);
