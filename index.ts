import { trackFunctionTime } from "./helper";
import {
  generatePointPairs2D,
  generatePointPairs3D,
  cartesianToPolar,
  cartesianToSpherical,
  distanceCartesian2D,
  distanceCartesian3D,
  distancePolar,
  distanceSpherical,
  polarToCartesian,
  sphericalToCartesian,
} from "./mathFunctions";
import { Point2D, PointPolar, Point3D, PointSpherical } from "./types";

const numPairs = 1000000;
const range = 1000000;
const pointPairs2D: [Point2D, Point2D][] = generatePointPairs2D(
  numPairs,
  range
);
const pointPairs3D: [Point3D, Point3D][] = generatePointPairs3D(
  numPairs,
  range
);

const pointPairsPolar: [PointPolar, PointPolar][] = pointPairs2D.map((pair) => [
  cartesianToPolar(pair[0]),
  cartesianToPolar(pair[1]),
]);

const pointPairsSpherical: [PointSpherical, PointSpherical][] =
  pointPairs3D.map((pair) => [
    cartesianToSpherical(pair[0]),
    cartesianToSpherical(pair[1]),
  ]);

const convertedBack2D: [Point2D, Point2D] = [
  polarToCartesian(pointPairsPolar[0][0]),
  polarToCartesian(pointPairsPolar[0][1]),
];

console.log("Original 2D pair:\n", pointPairs2D[0]);
console.log("2D pair after conversion to polar and back:\n", convertedBack2D);

const convertedBack3D: [Point3D, Point3D] = [
  sphericalToCartesian(pointPairsSpherical[0][0]),
  sphericalToCartesian(pointPairsSpherical[0][1]),
];

console.log("Original 3D pair:\n", pointPairs3D[0]);
console.log(
  "3D pair after conversion to spherical and back:\n",
  convertedBack3D
);

let timeMilliseconds = 0;

timeMilliseconds = trackFunctionTime(() => {
  for (let i = 0; i < numPairs; i++) {
    distanceCartesian2D(pointPairs2D[i][0], pointPairs2D[i][1]);
  }
});

console.log(`Distance 2D: ${timeMilliseconds} milliseconds`);

timeMilliseconds = trackFunctionTime(() => {
  for (let i = 0; i < numPairs; i++) {
    distanceCartesian3D(pointPairs3D[i][0], pointPairs3D[i][1]);
  }
});

console.log(`Distance 3D: ${timeMilliseconds} milliseconds`);

timeMilliseconds = trackFunctionTime(() => {
  for (let i = 0; i < numPairs; i++) {
    distancePolar(pointPairsPolar[i][0], pointPairsPolar[i][1]);
  }
});

console.log(`Polar: ${timeMilliseconds} milliseconds`);

timeMilliseconds = trackFunctionTime(() => {
  for (let i = 0; i < numPairs; i++) {
    distanceSpherical(pointPairsSpherical[i][0], pointPairsSpherical[i][1]);
  }
});

console.log(`Spherical: ${timeMilliseconds} milliseconds`);
