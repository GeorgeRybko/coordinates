"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
const mathFunctions_1 = require("./mathFunctions");
const numPairs = 1000000;
const range = 10;
const pointPairs2D = (0, mathFunctions_1.generatePointPairs2D)(numPairs, range);
const pointPairs3D = (0, mathFunctions_1.generatePointPairs3D)(numPairs, range);
const pointPairsPolar = pointPairs2D.map((pair) => [
    (0, mathFunctions_1.cartesianToPolar)(pair[0]),
    (0, mathFunctions_1.cartesianToPolar)(pair[1]),
]);
const pointPairsSpherical = pointPairs3D.map((pair) => [
    (0, mathFunctions_1.cartesianToSpherical)(pair[0]),
    (0, mathFunctions_1.cartesianToSpherical)(pair[1]),
]);
const convertedBack2D = [
    (0, mathFunctions_1.polarToCartesian)(pointPairsPolar[0][0]),
    (0, mathFunctions_1.polarToCartesian)(pointPairsPolar[0][1]),
];
console.log("Original 2D pair:\n", pointPairs2D[0]);
console.log("2D pair after conversion to polar and back:\n", convertedBack2D);
const convertedBack3d = [
    (0, mathFunctions_1.sphericalToCartesian)(pointPairsSpherical[0][0]),
    (0, mathFunctions_1.sphericalToCartesian)(pointPairsSpherical[0][1]),
];
console.log("Original 3D pair:\n", pointPairs3D[0]);
console.log("3D pair after conversion to spherical and back:\n", convertedBack3d);
let timeMiliseconds = 0;
timeMiliseconds = (0, helper_1.trackFunctionTime)(() => {
    for (let i = 0; i < numPairs; i++) {
        (0, mathFunctions_1.distanceCartesian2D)(pointPairs2D[i][0], pointPairs2D[i][1]);
    }
});
console.log(`Distance 2D: ${timeMiliseconds} milliseconds`);
timeMiliseconds = (0, helper_1.trackFunctionTime)(() => {
    for (let i = 0; i < numPairs; i++) {
        (0, mathFunctions_1.distanceCartesian3D)(pointPairs3D[i][0], pointPairs3D[i][1]);
    }
});
console.log(`Distance 3D: ${timeMiliseconds} milliseconds`);
timeMiliseconds = (0, helper_1.trackFunctionTime)(() => {
    for (let i = 0; i < numPairs; i++) {
        (0, mathFunctions_1.distancePolar)(pointPairsPolar[i][0], pointPairsPolar[i][1]);
    }
});
console.log(`Polar ${timeMiliseconds} milliseconds`);
timeMiliseconds = (0, helper_1.trackFunctionTime)(() => {
    for (let i = 0; i < numPairs; i++) {
        (0, mathFunctions_1.distanceSpherical)(pointPairsSpherical[i][0], pointPairsSpherical[i][1]);
    }
});
console.log(`Spherical ${timeMiliseconds} milliseconds`);
