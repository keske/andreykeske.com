import * as faceapi from "face-api.js";
import React from "react";

import { Loading } from "@/components";

export const Duality: React.FC = () => {
  const mediaStreamRef = React.useRef<MediaStream | null>(null);

  const videoRef = React.useRef<HTMLVideoElement>(null);

  const [hasEyes, setHasEyes] = React.useState(false);

  const [isCameraReady, setIsCameraReady] = React.useState(false);

  React.useEffect(() => {
    const startVideo = async () => {
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
    };

    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    ]).then(startVideo);

    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current
          .getTracks()
          .forEach((track: MediaStreamTrack) => {
            track.stop();
          });
      }
    };
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        if (videoRef.current) {
          const video = videoRef.current;

          const detection = await faceapi
            .detectSingleFace(
              video,
              new faceapi.TinyFaceDetectorOptions(),
            )
            .withFaceLandmarks();

          setHasEyes(
            !!detection?.landmarks.getLeftEye() &&
              !!detection?.landmarks.getRightEye(),
          );
        }
      } catch (error) {
        console.log("error", error);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <Loading isLoading={!isCameraReady} />
      <video autoPlay className="hidden" muted ref={videoRef} />
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
        <p
          className="text-5xl font-black uppercase tracking-wider
        "
        >
          {hasEyes ? "Particle" : "Wave"}
        </p>
        <p className="text-xs opacity-50">
          Light behaves as a wave and as a particle, depending on the
          circumstances and the effect being observed
        </p>
        {isCameraReady ? (
          <p className="text-xs opacity-30">
            Look or not at the camera
          </p>
        ) : (
          <p className="text-xs opacity-30">
            Waiting for the camera access
          </p>
        )}
      </div>
    </div>
  );
};
