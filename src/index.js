// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length > 0) {
        return matrix.flatMap((currentValue, index) =>
            index % 2 === 0 ? currentValue : currentValue.reverse()
        );
    } else {
        return [];
    }
};
