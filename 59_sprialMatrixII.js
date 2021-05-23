
// https://leetcode.com/problems/spiral-matrix-ii/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let r = 0;
    let c = 0;
    const total = n * n;
    let count = 1;
    const dirA = [[0,1], [1, 0], [0, -1], [-1, 0]]
    let dir = 0;      
          
    for(let i = 0 ; i < total; i++) {
        dp[r][c] = count;
        
        const tmpR = r + dirA[dir][0];
        const tmpC = c + dirA[dir][1];
        
        if(dp[tmpR] === undefined || dp[tmpR][tmpC] === undefined || dp[tmpR][tmpC] !== 0 ) {
            dir = (dir + 1 ) % 4
        }
        r += dirA[dir][0];
        c += dirA[dir][1];
        count++
    }
    return dp;
    
};