import React from "react";

import { CenteredBox } from "@/components/index";

export type VideoRef = React.RefObject<HTMLVideoElement>;

export const withCameraAccess =
  (
    Component: React.ComponentType<{
      videoRef: VideoRef;
    }>,
  ) =>
  () => {
    const mediaStreamRef = React.useRef<MediaStream | null>(null);

    const videoRef = React.useRef<HTMLVideoElement>(null);

    const [isCameraReady, setIsCameraReady] = React.useState(false);

    React.useEffect(() => {
      (async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });

          if (videoRef.current) {
            mediaStreamRef.current = stream;
            videoRef.current.srcObject = stream;

            setIsCameraReady(true);
          }
        } catch (error) {
          console.log("error", error);
        }
      })();

      return () => {
        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach((track) => {
            track.stop();
          });
        }
      };
    }, []);

    return (
      <>
        <div
          style={{
            left: -1000,
            position: "absolute",
            top: -1000,
          }}
        >
          <video autoPlay ref={videoRef} />
        </div>
        {isCameraReady ? (
          <Component videoRef={videoRef} />
        ) : (
          <CenteredBox className="absolute h-screen w-screen">
            Waiting for the camera access
          </CenteredBox>
        )}
      </>
    );
  };
