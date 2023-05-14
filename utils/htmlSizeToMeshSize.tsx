import * as THREE from "three";

export const htmlSizeToMeshSize = (
  htmlWidth: number,
  htmlHeight: number,
  canvasWidth: number,
  canvasHeight: number,
): THREE.Vector3 => {
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

  return new THREE.Vector3(scaleX, scaleY, 1);
};
