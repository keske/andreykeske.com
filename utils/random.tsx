export const random =
  // eslint-disable-next-line @typescript-eslint/default-param-last
  (min = 0, max: number) => Math.random() * (max - min) + min;
