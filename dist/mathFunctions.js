"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePointPairs3D = exports.generatePointPairs2D = exports.distanceSpherical = exports.distancePolar = exports.distanceCartesian3D = exports.distanceCartesian2D = exports.sphericalToCartesian = exports.cartesianToSpherical = exports.polarToCartesian = exports.cartesianToPolar = void 0;
function cartesianToPolar(point) {
    const { x, y } = point;
    return {
        r: Math.sqrt(x * x + y * y),
        theta: Math.atan2(y, x),
    };
}
exports.cartesianToPolar = cartesianToPolar;
function polarToCartesian(point) {
    const { r, theta } = point;
    return {
        x: r * Math.cos(theta),
        y: r * Math.sin(theta),
    };
}
exports.polarToCartesian = polarToCartesian;
function cartesianToSpherical(point) {
    const { x, y, z } = point;
    return {
        r: Math.sqrt(x * x + y * y + z * z),
        theta: Math.atan2(y, x),
        phi: Math.acos(z / Math.sqrt(x * x + y * y + z * z)),
    };
}
exports.cartesianToSpherical = cartesianToSpherical;
function sphericalToCartesian(point) {
    const { r, theta, phi } = point;
    return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
    };
}
exports.sphericalToCartesian = sphericalToCartesian;
function distanceCartesian2D(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}
exports.distanceCartesian2D = distanceCartesian2D;
function distanceCartesian3D(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) +
        Math.pow(point2.y - point1.y, 2) +
        Math.pow(point2.z - point1.z, 2));
}
exports.distanceCartesian3D = distanceCartesian3D;
function distancePolar(point1, point2) {
    const distance = Math.sqrt(Math.pow(point1.r, 2) +
        Math.pow(point2.r, 2) -
        2 * point1.r * point2.r * Math.cos(point2.theta - point1.theta));
    return distance;
}
exports.distancePolar = distancePolar;
function distanceSpherical(point1, point2) {
    const distance = Math.sqrt(point1.r * point1.r +
        point2.r * point2.r -
        2 *
            point1.r *
            point2.r *
            (Math.sin(point1.theta) *
                Math.sin(point2.theta) *
                Math.cos(point1.phi - point2.phi) +
                Math.cos(point1.theta) * Math.cos(point2.theta)));
    return distance;
}
exports.distanceSpherical = distanceSpherical;
function generatePointPairs2D(numPairs, range) {
    const pointPairs = [];
    for (let i = 0; i < numPairs; i++) {
        const point1 = {
            x: Math.random() * range - range / 2,
            y: Math.random() * range - range / 2,
        };
        const point2 = {
            x: Math.random() * range - range / 2,
            y: Math.random() * range - range / 2,
        };
        pointPairs.push([point1, point2]);
    }
    return pointPairs;
}
exports.generatePointPairs2D = generatePointPairs2D;
function generatePointPairs3D(numPairs, range) {
    const pointPairs = [];
    for (let i = 0; i < numPairs; i++) {
        const point1 = {
            x: Math.random() * range - range / 2,
            y: Math.random() * range - range / 2,
            z: Math.random() * range - range / 2,
        };
        const point2 = {
            x: Math.random() * range - range / 2,
            y: Math.random() * range - range / 2,
            z: Math.random() * range - range / 2,
        };
        pointPairs.push([point1, point2]);
    }
    return pointPairs;
}
exports.generatePointPairs3D = generatePointPairs3D;
