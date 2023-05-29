import { useRouter } from "next/router";
import React from "react";

import type { NextPage } from "next";

const Note: NextPage = () => {
  const { query } = useRouter();

  const audioRef = React.useRef<HTMLAudioElement>(null!);

  const note = query.note;

  const handleTabVisibility = React.useCallback(() => {
    if (document.hidden) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }, []);

  const renderAudiElement = React.useCallback(
    () =>
      note && (
        <audio
          playsInline
          ref={audioRef}
          src={`/audio/notes/${note}.wav`}
        />
      ),
    [note],
  );

  React.useEffect(() => {
    window.addEventListener("visibilitychange", handleTabVisibility);

    return () => {
      window.removeEventListener(
        "visibilitychange",
        handleTabVisibility,
      );
    };
  }, [handleTabVisibility]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <h3 className="text-5xl font-black uppercase">{note}</h3>
      {renderAudiElement()}
    </div>
  );
};

export default Note;
