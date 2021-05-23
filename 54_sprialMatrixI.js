
// https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
    const m = matrix.length;
    if(m == 0) return [];
    
    const n = matrix[0].length;
    
    const result = [];
    const tmp = new Array(m).fill(false).map(() => new Array(false));
    let r = 0;
    let c = 0;
    let dir = 0;
    const dirA = [[0,1], [1, 0], [0, -1], [-1, 0]]
    
    
    for(let i = 0 ; i < m * n; i++) {
        result.push(matrix[r][c]);
        tmp[r][c] = true;
        const tmpR = r + dirA[dir][0];
        const tmpC = c + dirA[dir][1];
        
        if(matrix[tmpR] === undefined || matrix[tmpR][tmpC] === undefined || tmp[tmpR][tmpC] === true) {
            dir = (dir + 1) % 4
        }
        
             r += dirA[dir][0];
             c += dirA[dir][1];
        
    }
    return result;
    
};

// approach2

var spiralOrder = function(matrix) {
    if (matrix.length == 0) return [];
    
    let res = [];
    let row1 = 0, col1 = 0, row2 = matrix.length-1, col2 = matrix[0].length-1;
    
    while (row1 <= row2 && col1 <= col2) {
        // upper perimeter
        for (let col = col1; col <= col2; col++) {
            res.push(matrix[row1][col]);    
        }
        // right perimeter
        for (let row = row1+1; row <= row2; row++) {
            res.push(matrix[row][col2]);
        }
        if (row1 < row2 && col1 < col2) {
            // bottom perimeter
            for (let col = col2-1; col >= col1; col--) {
                res.push(matrix[row2][col]);
            }
            // left perimeter
            for (let row = row2-1; row > row1; row--) {
                res.push(matrix[row][col1]);
            }    
        }
        
        row1++, col1++, row2--, col2--;
    }
    
    return res;
    
    // Time Complexity: O(m*n)
    // Space Complexity: O(1)
};
