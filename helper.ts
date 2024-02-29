export const trackFunctionTime = (func: Function): number => {
  let startTime = performance.now();

  func();

  let endTime = performance.now();
  return endTime - startTime;
};
