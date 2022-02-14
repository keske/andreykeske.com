import * as THREE from "three";

export type Block = {
  /**
   * Optional, position of the cube
   */
  position?: number[] | THREE.Vector3;
  /**
   * Radius of the block
   */
  radius: number;

  /**
   * Optional, show the outer cube
   */
  showLines: boolean;
};

export type Cube = {
  /**
   * Color of the cube
   */
  color: THREE.Color | number | string;

  /**
   * Amount of particles in the cube
   */
  density: number;

  /**
   * Optional, position of the cube
   */
  position?: number[] | THREE.Vector3;

  /**
   * Optional, show the outer cube
   */
  showLines: boolean;

  /**
   * Radius of the cube
   */
  radius: number;
};
