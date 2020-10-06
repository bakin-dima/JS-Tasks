module.exports = class DepthCalculator {
  calculateDepth(arr, result = [], depthCount = 1) {
    result.push(depthCount);
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], result, depthCount + 1);
      }
    }
    return Math.max(...result);
  }
};
