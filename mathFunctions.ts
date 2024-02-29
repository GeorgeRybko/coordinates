import { Point2D, PointPolar, Point3D, PointSpherical } from "./types";

export function cartesianToPolar(point: Point2D): PointPolar {
  const { x, y } = point;

  return {
    r: Math.sqrt(x * x + y * y),
    theta: Math.atan2(y, x),
  };
}

export function polarToCartesian(point: PointPolar): Point2D {
  const { r, theta } = point;

  return {
    x: r * Math.cos(theta),
    y: r * Math.sin(theta),
  };
}

export function cartesianToSpherical(point: Point3D): PointSpherical {
  const { x, y, z } = point;

  return {
    r: Math.sqrt(x * x + y * y + z * z),
    theta: Math.atan2(y, x),
    phi: Math.acos(z / Math.sqrt(x * x + y * y + z * z)),
  };
}

export function sphericalToCartesian(point: PointSpherical): Point3D {
  const { r, theta, phi } = point;

  return {
    x: r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.sin(phi) * Math.sin(theta),
    z: r * Math.cos(phi),
  };
}

export function distanceCartesian2D(point1: Point2D, point2: Point2D): number {
  return Math.sqrt(
    Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
  );
}

export function distanceCartesian3D(point1: Point3D, point2: Point3D): number {
  return Math.sqrt(
    Math.pow(point2.x - point1.x, 2) +
      Math.pow(point2.y - point1.y, 2) +
      Math.pow(point2.z - point1.z, 2)
  );
}

export function distancePolar(point1: PointPolar, point2: PointPolar): number {
  const distance = Math.sqrt(
    Math.pow(point1.r, 2) +
      Math.pow(point2.r, 2) -
      2 * point1.r * point2.r * Math.cos(point2.theta - point1.theta)
  );

  return distance;
}

export function distanceSpherical(
  point1: PointSpherical,
  point2: PointSpherical
): number {
  const distance = Math.sqrt(
    point1.r * point1.r +
      point2.r * point2.r -
      2 *
        point1.r *
        point2.r *
        (Math.sin(point1.theta) *
          Math.sin(point2.theta) *
          Math.cos(point1.phi - point2.phi) +
          Math.cos(point1.theta) * Math.cos(point2.theta))
  );

  return distance;
}

export function generatePointPairs2D(
  numPairs: number,
  range: number
): [Point2D, Point2D][] {
  const pointPairs: [Point2D, Point2D][] = [];

  for (let i = 0; i < numPairs; i++) {
    const point1: Point2D = {
      x: Math.random() * range - range / 2,
      y: Math.random() * range - range / 2,
    };

    const point2: Point2D = {
      x: Math.random() * range - range / 2,
      y: Math.random() * range - range / 2,
    };

    pointPairs.push([point1, point2]);
  }

  return pointPairs;
}

export function generatePointPairs3D(
  numPairs: number,
  range: number
): [Point3D, Point3D][] {
  const pointPairs: [Point3D, Point3D][] = [];

  for (let i = 0; i < numPairs; i++) {
    const point1: Point3D = {
      x: Math.random() * range - range / 2,
      y: Math.random() * range - range / 2,
      z: Math.random() * range - range / 2,
    };

    const point2: Point3D = {
      x: Math.random() * range - range / 2,
      y: Math.random() * range - range / 2,
      z: Math.random() * range - range / 2,
    };

    pointPairs.push([point1, point2]);
  }

  return pointPairs;
}
