

// https://leetcode.com/problems/spiral-matrix-iii/


/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {

    const arr = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    let row = rStart;
    let col = cStart;
    const total = rows * cols;
    const result = [[row, col]];
    let dir = 0;
    let steps = 1;
    let increment = 1;

    while (result.length < total) {
        for (let j = 0; j < increment; j++) {
            row += arr[dir][0];
            col += arr[dir][1];
            if (row < rows && col < cols && row >= 0 && col >= 0) {
                result.push([row, col]);
            }
        }

        dir = (dir + 1) % 4;

        if (steps % 2 === 0) {
            increment++
        }
        steps++;
    }

    return result;

};