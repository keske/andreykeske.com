const interpolate = (
  xarr: readonly number[],
  yarr: readonly number[],
  xpoint: number,
) => {
  const xa = [...xarr].reverse().find((x) => x <= xpoint);

  const xb = xarr.find((x) => x >= xpoint);

  if (!xa) {
    return yarr[0];
  }

  if (!xb) {
    return yarr[1];
  }

  const ya = yarr[xarr.indexOf(xa)];

  const yb = yarr[xarr.indexOf(xb)];

  return (
    yarr[xarr.indexOf(xpoint)] || ya + ((xpoint - xa) * (yb - ya)) / (xb - xa)
  );
};

export default interpolate;
