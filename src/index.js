exports.min = min = (array) =>
    array instanceof Array && array.length > 0
        ? array.reduce((a, b) => (a < b ? (b = a) : b))
        : 0;
exports.max = max = (array) =>
    array instanceof Array && array.length > 0
        ? array.reduce((a, b) => (a > b ? (b = a) : b))
        : 0;

exports.avg = avg = (array) =>
    array instanceof Array && array.length > 0
        ? array.reduce((a, b) => a + b) / array.length
        : 0;
