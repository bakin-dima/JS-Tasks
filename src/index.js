module.exports = towelSort = (matrix) => {
    return typeof matrix != "undefined"
        ? matrix.reduce(
              (result, arr, index) =>
                  result.concat(index % 2 !== 0 ? arr.reverse() : arr),
              []
          )
        : [];
};
