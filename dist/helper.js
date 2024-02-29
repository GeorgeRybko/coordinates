"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackFunctionTime = void 0;
const trackFunctionTime = (func) => {
    let startTime = performance.now();
    func();
    let endTime = performance.now();
    return endTime - startTime;
};
exports.trackFunctionTime = trackFunctionTime;
