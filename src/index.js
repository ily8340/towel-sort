module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix === undefined) return result;
    for (let a = 0; a < matrix.length; a++) {
        if (a % 2 == 0) {
            matrix[a].forEach((item) => {
                result.push(item);
            });
        } else {
            matrix[a].reverse().forEach((item) => {
                result.push(item);
            });
        }
    }
    return result;
};
