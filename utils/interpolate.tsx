export const interpolate = (
  from: readonly number[],
  to: readonly number[],
  x: number,
): number => {
  const [x1, x2] = from;

  const [y1, y2] = to;

  return y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);
};
