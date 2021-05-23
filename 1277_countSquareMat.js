
//https://leetcode.com/problems/count-square-submatrices-with-all-ones/


/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let count = 0;
    let r = matrix.length
    let c = matrix[0].length;
    let dp= new Array(r).fill(0).map(a => new Array(c).fill(0));
    
    for(let i = 0; i <r; i++) {
        for(let j = 0; j<c; j++) {
            
            if(i === 0 || j === 0) {
                dp[i][j] = matrix[i][j] === 1 ? 1 : 0;
                
            } else {
                if(matrix[i][j] === 1) {
                    dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1    
                }
                
            }
            count += dp[i][j]
        }
    }

    return count;
    
};