import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import axios from "axios";
import React from "react";
import * as THREE from "three";
// @ts-expect-error WIP
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { NURBSSurface } from "three/examples/jsm/curves/NURBSSurface";

import { Button, Loading, WorkDetails } from "@/components/index";
import {
  useNSControlPoints,
  useScrollInterpolation,
} from "@/hooks/index";

type NURBSNewsPaperProps = {
  side?: THREE.Side;
  url?: string;
};

export const NURBSNewsPaper: React.FC<NURBSNewsPaperProps> = ({
  side = THREE.BackSide,
  url,
}) => {
  const nsControlPoints = useNSControlPoints();

  const nurbsSurface = React.useMemo(() => {
    const degree1 = 2;

    const degree2 = 3;

    const knots1 = [0, 0, 0, 1, 1, 1];

    const knots2 = [0, 0, 0, 0, 1, 1, 1, 1];

    return new NURBSSurface(
      degree1,
      degree2,
      knots1,
      knots2,
      nsControlPoints,
    );
  }, [nsControlPoints]);

  const map = React.useMemo(
    () => url && new THREE.TextureLoader().load(url),
    [url],
  );

  const geometry = React.useMemo(() => {
    const getSurfacePoint = (
      u: number,
      v: number,
      target: THREE.Vector3,
    ) => {
      const point = nurbsSurface.getPoint(u, v, target);

      const noise = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
      );

      noise.multiplyScalar(0.05);

      return point;
    };

    return new ParametricGeometry(getSurfacePoint, 20, 20);
  }, [nurbsSurface]);

  const material = React.useMemo(
    () =>
      new THREE.MeshLambertMaterial({
        ...(map && url && { map }),
        color: "#ffffff",
        side,
      }),
    [map, side, url],
  );

  const mesh = React.useMemo(
    () => new THREE.Mesh(geometry, material),
    [geometry, material],
  );

  const handleApplyNoise = React.useCallback(() => {
    const positions = geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      const noise = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
      );

      noise.multiplyScalar(0.2);
      const scale = 0.3 + Math.abs(Math.sin(59 * 4 + i));

      positions[i] += noise.x * scale;
      positions[i + 1] += noise.y * scale;
      positions[i + 2] += noise.z * scale;
    }

    geometry.attributes.position.needsUpdate = true;
  }, [geometry]);

  React.useEffect(() => {
    if (material?.map) {
      material.map.repeat.x = -1;
    }
  }, [material]);

  React.useEffect(() => {
    if (map && url) {
      map.anisotropy = 32;

      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
    }
  }, [map, url]);

  React.useEffect(() => {
    handleApplyNoise();
  }, [handleApplyNoise]);

  return (
    <group>
      <primitive object={mesh} />
    </group>
  );
};

export const CrumpledNewspaper: React.FC = () => {
  const blurOverlayValue = useScrollInterpolation(0, 10, 0);

  const canvasWrapperOpacityValue = useScrollInterpolation(1, 0.1, 1);

  const controlsOpacityValue = useScrollInterpolation(1, -1, 1);

  const [isFetching, setIsFetching] = React.useState(false);

  const [imageUrl, setImageUrl] = React.useState(
    "images/new-yorker.png",
  );

  const [url, setUrl] = React.useState("https://newyorker.com");

  const renderNURBS = React.useMemo(
    () => <NURBSNewsPaper url={imageUrl} />,
    [imageUrl],
  );

  const getScreenshot = React.useCallback(async () => {
    const request = axios.CancelToken.source();

    try {
      const { data } = await axios.post(
        "/api/crumpled-newspaper",
        { url },
        {
          cancelToken: request.token,
          responseType: "arraybuffer",
        },
      );

      const blob = new Blob([data], { type: "image/jpg" });

      setImageUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
    }

    return () => {
      request.cancel();
    };
  }, [url]);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(event.target.value);
    },
    [],
  );

  const handleClick = React.useCallback(async () => {
    setIsFetching(true);
    await getScreenshot();
    setIsFetching(false);
  }, [getScreenshot]);

  return (
    <>
      <Loading isLoading={isFetching} />
      <div
        className="fixed left-0 top-0 h-screen w-screen"
        style={{
          opacity: canvasWrapperOpacityValue,
        }}
      >
        <Canvas
          camera={{ position: [0, -2, -3.3] }}
          className="h-full w-full"
        >
          <ambientLight intensity={0.8} />
          <OrbitControls enableZoom={false} />
          {renderNURBS}
        </Canvas>
      </div>
      <div
        className="pointer-events-none fixed left-0 top-0 h-screen w-screen"
        style={{
          backdropFilter: `blur(${blurOverlayValue}px)`,
        }}
      />
      <WorkDetails>
        <div
          className="absolute flex h-1/2 w-screen justify-center"
          style={{
            top: window.innerHeight - 100,
          }}
        >
          <div className="flex w-1/2 flex-col gap-2 pb-20">
            <h3>Crumpled Newspaper</h3>
            <small>
              Crumpled Newspaper is an interactive web application
              that generates an image of a crumpled newspaper from a
              specified URL.
            </small>
            <small>
              Which is to say metaphor on real life newspaper and news
              became garbage
            </small>
            <time dateTime="2023">2023</time>
          </div>
        </div>
      </WorkDetails>
      <WorkDetails>
        <div
          className="fixed left-1/2 top-40 z-20 flex -translate-x-1/2 select-none gap-2 rounded-3xl bg-gray-200 p-3 font-sans text-xs dark:bg-gray-800"
          style={{
            opacity: controlsOpacityValue,
          }}
        >
          <input
            className="rounded-lg border-none bg-white p-1 outline-none dark:bg-black"
            defaultValue={url}
            onChange={handleChange}
            type="text"
          />
          <Button
            disabled={isFetching}
            onClick={handleClick}
            size="xs"
            variant="secondary"
          >
            Go
          </Button>
        </div>
      </WorkDetails>
    </>
  );
};
