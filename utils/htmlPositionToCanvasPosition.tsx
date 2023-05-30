export const htmlPositionToCanvasPosition = (
  htmlX: number,
  htmlY: number,
  htmlWidth: number,
  htmlHeight: number,
  canvasWidth: number,
  canvasHeight: number,
): [x: number, y: number] => {
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

  const canvasX =
    htmlX * scaleX + (canvasWidth - htmlWidth * scaleX) / 2;

  const canvasY =
    htmlY * scaleY + (canvasHeight - htmlHeight * scaleY) / 2;

  return [canvasX / 10, canvasY / 10];
};
