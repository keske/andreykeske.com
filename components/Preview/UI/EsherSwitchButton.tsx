import clsx from "clsx";
import * as R from "ramda";
import React from "react";

import { UploadcareImage } from "@/components/index";

type SwitchProps = {
  handleClick: () => void;
  level: number;
  on: boolean;
};

const Switch: React.FC<SwitchProps> = ({ handleClick, level, on }) => {
  if (level === 1) {
    return (
      <div
        className={clsx(
          on ? "bg-blue-500" : "bg-gray-100 shadow-inner",
          "relative inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-full",
        )}
        onClick={handleClick}
      >
        {on && (
          <span
            className={clsx(
              "h-[6px] w-[6px] rounded-full bg-white shadow-md duration-200",
            )}
          />
        )}
      </div>
    );
  }

  if (level === 2) {
    return (
      <div
        className={clsx(
          on ? "bg-[#3B88F7]" : "bg-gray-100 shadow-inner",
          "relative inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-lg",
        )}
        onClick={handleClick}
      >
        <span
          className={clsx(
            "h-2 w-2 rounded-full bg-white shadow-md duration-200",
          )}
        />
      </div>
    );
  }

  if (level === 3) {
    return (
      <div
        className={clsx(
          on ? "bg-[#539EEB]" : "bg-gray-200",
          "relative inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg",
        )}
        onClick={handleClick}
      >
        <span
          className={clsx(
            "h-3 w-3 rounded-full bg-white shadow-md duration-200",
          )}
        />
      </div>
    );
  }

  if (level === 4) {
    return (
      <div
        className={clsx(
          on ? "bg-[#38A4C0]" : "bg-gray-200",
          "relative inline-flex h-8 w-8 cursor-pointer items-center rounded-xl",
        )}
        onClick={handleClick}
      >
        <span
          className={clsx(
            on ? "translate-x-2" : "translate-x-1",
            "h-4 w-4 rounded-full bg-white shadow-md duration-200",
          )}
        />
      </div>
    );
  }

  if (level === 5) {
    return (
      <div
        className={clsx(
          on ? "bg-[#37B1A7]" : "bg-gray-200",
          "relative inline-flex h-10 w-12 cursor-pointer items-center rounded-xl",
        )}
        onClick={handleClick}
      >
        <span
          className={clsx(
            on ? "translate-x-4" : "translate-x-1",
            "h-6 w-6 rounded-full bg-white shadow-md duration-200",
          )}
        />
      </div>
    );
  }

  if (level === 6) {
    return (
      <div
        className={clsx(
          on ? "bg-[#35C186]" : "bg-gray-200",
          "relative inline-flex h-10 w-14 cursor-pointer items-center rounded-full",
        )}
        onClick={handleClick}
      >
        <span
          className={clsx(
            on ? "translate-x-4" : "translate-x-1",
            "h-8 w-8 rounded-full bg-white shadow-md duration-200",
          )}
        />
      </div>
    );
  }

  if (level === 7) {
    return (
      <div
        className={clsx(
          on ? "bg-green-500" : "bg-gray-200",
          "relative inline-flex h-10 w-16 cursor-pointer items-center rounded-full",
        )}
        onClick={handleClick}
      >
        <span
          className={clsx(
            on ? "translate-x-7" : "translate-x-1",
            "h-8 w-8 rounded-full bg-white shadow-md duration-200",
          )}
        />
      </div>
    );
  }

  return null;
};

export const EsherSwitchButton: React.FC = () => {
  const [on, setOn] = React.useState(true);

  const handleClick = React.useCallback(() => {
    setOn(!on);
  }, [on]);

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-20 p-80">
      <div className="flex flex-col gap-5">
        {R.range(0, 12).map((row) => (
          <div
            className="flex flex-row items-center justify-center gap-5"
            key={row}
          >
            {R.range(0, 8).map((col) => (
              <Switch
                handleClick={handleClick}
                level={row % 2 ? col : 8 - col}
                on={row % 2 ? !on : on}
              />
            ))}
          </div>
        ))}
      </div>
      <hr />
      <div className="flex flex-col items-center">
        <strong>Inspiration</strong>
        <div className="mt-4 w-1/4">
          <figure>
            <UploadcareImage
              alt="Esher Switch Button"
              src="https://ucarecdn.com/2800b37e-8afc-4ee4-aa38-3c9e8d36f968/"
            />
            <figcaption>
              <cite>
                <a
                  className="text-xs"
                  href="https://en.wikipedia.org/wiki/Sky_and_Water_I"
                >
                  Sky and Water I. M C. Escher
                </a>
              </cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
