import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMove } from "@use-gesture/react";
import * as R from "ramda";
import React from "react";
import * as THREE from "three";
import { BufferGeometry, Material, Mesh } from "three";

type Data = Array<{
  /**
   * Density if particles in the cube
   */
  density: number;

  /**
   * X position
   */
  x: number;

  /**
   * Y position
   */
  y: number;
}>;

const Particles: React.FC<Props> = ({ color, density, radius }: any) => {
  console.log("Particles");
  const ref = React.useRef<
    HTMLDivElement & {
      geometry: THREE.BoxGeometry;
    }
  >();

  const particlePositions = React.useMemo(
    () => new Float32Array(density * 3),
    [density],
  );

  const material = React.useMemo(
    () =>
      new THREE.PointsMaterial({
        blending: THREE.AdditiveBlending,
        color,
        size: 2,
        sizeAttenuation: false,
        transparent: true,
      }),
    [color],
  );

  const setPosition = React.useCallback(() => {
    const particles = new THREE.BufferGeometry();

    [...Array(density)].forEach((_, i) => {
      const x = Math.random() * radius - radius / 2;

      const y = Math.random() * radius - radius / 2;

      const z = Math.random() * radius - radius / 2;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;
    });

    return new THREE.Points(particles, material);
  }, [density, material, particlePositions, radius]);

  const cloud = React.useMemo(() => {
    const pMaterial = new THREE.PointsMaterial({
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
      size: 2,
      sizeAttenuation: false,
      transparent: true,
    });

    const particles = new THREE.BufferGeometry();

    setPosition();

    particles.setDrawRange(0, density);
    particles.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3).setUsage(
        THREE.DynamicDrawUsage,
      ),
    );

    return new THREE.Points(particles, pMaterial);
  }, [density, particlePositions, setPosition]);

  // console.log("cloud", cloud);

  // useFrame(() => {
  //   setPosition();

  //   ref.current.geometry.attributes.position.needsUpdate = false;
  // });

  return <primitive object={cloud} ref={ref} />;
};

type Props = {
  height?: number;
  src?: string;
  width?: number;
};

export const AtomicPhoto: React.FC<Props> = ({
  height = 1000,
  src,
  width = 1000,
}) => {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  const image = React.useRef<HTMLImageElement>(null);

  const ref = React.useRef<THREE.Scene>();

  // const { showLines } = useStore();

  const radius = React.useMemo(() => 0.1, []);

  const [data, setData] = React.useState<Data>([]);

  const getColorAtOffset = React.useCallback(
    (imageData, offset: number) =>
      (
        (imageData[offset + 2] * 65536 +
          imageData[offset + 1] * 256 +
          imageData[offset]) /
        1000000
      ).toFixed(0),
    [],
  );

  // React.useEffect(() => {
  //   const _data: Data = [];

  //   const ctx = canvas.current.getContext("2d");

  //   image.current.onload = () => {
  //     ctx.drawImage(image.current, 0, 0);

  //     const imageData = ctx.getImageData(0, 0, width, height);

  //     R.range(0, height).forEach((y) => {
  //       R.range(0, width).forEach((x) => {
  //         const offset = (y * width + x) * 4;

  //         const density = parseInt(
  //           getColorAtOffset(imageData.data, offset),
  //           10,
  //         );

  //         _data.push({
  //           density,
  //           x,
  //           y,
  //         });
  //       });
  //     });
  //   };
  //   setData(_data);
  // }, []);

  const photo = React.useMemo(() => {
    // console.log("photo", data);
    const _data: Data = [];

    const ctx = canvas?.current?.getContext("2d");

    console.log("image", image);

    // image.current.onload = () => {
    //   ctx?.drawImage(image?.current, 0, 0);

    //   const imageData = ctx.getImageData(0, 0, width, height);

    //   R.range(0, height).forEach((y) => {
    //     R.range(0, width).forEach((x) => {
    //       const offset = (y * width + x) * 4;

    //       const density = parseInt(
    //         getColorAtOffset(imageData.data, offset),
    //         10,
    //       );

    //       _data.push({
    //         density,
    //         x,
    //         y,
    //       });
    //     });
    //   });
    // };

    console.log("_data", _data);

    return _data.map(({ density, x, y }) => (
      <group
        key={`cube-${x}-${y}`}
        position={[x * radius, -density * radius, y * radius]}
      >
        <Particles color={0xffffff} density={density} radius={radius} />
      </group>
    ));
  }, []);

  return (
    <>
      <canvas className="hidden" height={height} ref={canvas} width={width} />
      <img className="hidden" ref={image} src={"/images/volcom/volcom.jpg"} />

      <Canvas
        camera={{ position: [0, 7, 0] }}
        className="h-screen w-screen bg-slate-800"
      >
        <React.Suspense fallback={<p>Loading...</p>}>
          <OrbitControls enableZoom />
          <group
            position={[-((width / 2) * radius), 0, -((height / 2) * radius)]}
            ref={ref}
          >
            {photo}
          </group>
        </React.Suspense>
      </Canvas>
    </>
  );
};
