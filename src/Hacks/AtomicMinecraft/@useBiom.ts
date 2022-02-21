/* eslint no-plusplus: 0 */

import SimplexNoise from "simplex-noise";

import useStore from "./@store";

const useBiom = (): number[][] => {
  const { height, width } = useStore();

  const gen = new SimplexNoise();

  function noise(nx: number, ny: number): number {
    return gen.noise2D(nx, ny);
  }

  const value = [];

  for (let y = -height; y < height; y++) {
    value[y] = [];
    for (let x = -width; x < width; x++) {
      const nx = x / width - 0.5;

      const ny = y / height - 0.5;

      // @ts-expect-error wip
      value[y][x] = noise(nx, ny).toFixed(1) * 10;
    }
  }

  return value;
};

export default useBiom;
