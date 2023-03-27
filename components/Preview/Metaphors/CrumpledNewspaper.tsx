import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import axios from "axios";
import React from "react";

import {
  Button,
  Loading,
  NURBSNewsPaper,
  WorkDetails,
} from "@/components/index";

export const CrumpledNewspaper: React.FC = () => {
  const [isFetching, setIsFetching] = React.useState(false);

  const [imageUrl, setImageUrl] = React.useState("images/new-yorker.png");

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
      <Loading isFetching={isFetching} />
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-center">
          <div className="h-screen w-screen">
            <Canvas
              camera={{ position: [0, -2, -3.3] }}
              className="h-full w-full"
            >
              <ambientLight intensity={0.8} />
              <OrbitControls />
              {renderNURBS}
            </Canvas>
            <WorkDetails>
              <div className="absolute bottom-10 left-1/2 z-50 flex -translate-x-1/2 select-none gap-2 rounded-xl bg-white p-3 font-sans text-xs dark:bg-gray-900">
                <input
                  className="rounded-lg border-none bg-slate-200 p-1 outline-none dark:bg-gray-800"
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
          </div>
        </div>
      </div>
    </>
  );
};
