module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }

    const newArray = [];

    for (let i = 0; i < matrix.length; i++) {
        const item = matrix[i];

        if (i % 2 === 0) {
            for (let j = 0; j < item.length; j++) {
                newArray.push(item[j]);
            }
        } else {
            for (let j = item.length - 1; j >= 0; j--) {
                newArray.push(item[j]);
            }
        }
    }

    return newArray;
}
