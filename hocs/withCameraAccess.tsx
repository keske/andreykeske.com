import React from "react";

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
        <video autoPlay className="absolute opacity-0" ref={videoRef} />
        {isCameraReady ? (
          <Component videoRef={videoRef} />
        ) : (
          <div>Waiting for the camera access</div>
        )}
      </>
    );
  };
