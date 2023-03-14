import React from "react";

type MandelbrotSetGeometryProps = {
  quantity?: number;
  size?: number;
};

const MandelbrotSetGeometry: React.FC<MandelbrotSetGeometryProps> = ({
  quantity = 100,
  size = 10,
}) => {
  const generate = React.useCallback(() => {
    const result = [];

    for (let x = 0; x < quantity; x++) {
      for (let y = 0; y < quantity; y++) {
        let i = 0;

        const cx = -2 + x / 30;

        const cy = -2 + y / 30;

        let zx = 0;

        let zy = 0;

        do {
          const xt = zx * zy;

          zx = zx * zx - zy * zy + cx;
          zy = 2 * xt + cy;
          i++;
        } while (i < 255 && zx * zx + zy * zy < 4);

        const color = i.toString(16);

        result.push([
          x * size,
          y * size,
          size,
          size,
          `#${color}${color}${color}`,
        ]);
      }
    }

    return result;
  }, [quantity, size]);

  const data: Array<Array<number | string>> = React.useMemo(
    () => generate(),
    [generate],
  );

  return (
    <div className="absolute">
      {data.map(([top, left, width, height, color]) => (
        <input
          checked={color === "#ffffff"}
          disabled={color !== "#ffffff"}
          style={{
            height,
            left,
            position: "absolute",
            top,
            width,
          }}
          type="radio"
        />
      ))}
    </div>
  );
};

export const MandelbrotSet: React.FC = () => (
  <div className="h-screen w-screen">
    <div className="relative">
      <MandelbrotSetGeometry />
    </div>
  </div>
);
