export const htmlSizeToMeshSize = (
  htmlWidth: number,
  htmlHeight: number,
  canvasWidth: number,
  canvasHeight: number,
): [width: number, height: number, depth: number] => {
  const aspectRatioHtml = htmlWidth / htmlHeight;

  const aspectRatioCanvas = canvasWidth / canvasHeight;

  let scaleX = 1;

  let scaleY = 1;

  if (aspectRatioHtml > aspectRatioCanvas) {
    // HTML element is wider than canvas
    scaleX = canvasWidth / htmlWidth;
    scaleY = scaleX / aspectRatioHtml;
  } else {
    // HTML element is taller than canvas
    scaleY = canvasHeight / htmlHeight;
    scaleX = scaleY * aspectRatioHtml;
  }

  return [scaleX, scaleY, 1];
};
