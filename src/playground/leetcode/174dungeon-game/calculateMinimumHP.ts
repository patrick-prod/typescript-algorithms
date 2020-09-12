// [initalHP, currHP];
function calculateMinimumHP(dungeon: number[][]): number {
    // TODO
    let n = dungeon.length;
    let dp: number[][][] = new Array(n);
    if (!n) return 0;
    let m = dungeon[0].length;
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(m).fill([0, 0]);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let currHPCost = dungeon[i][j] > 0 ? 0 : -dungeon[i][j];
            let currHP = currHPCost === 0 ? dungeon[i][j] : 0;
            if (i === 0 && j === 0) {
                dp[i][j] = [currHPCost, currHP];
            } else if (i === 0) {
                dp[i][j] = [
                    dp[i][j - 1][0] + currHPCost,
                    dp[i][j - 1][1] + currHP,
                ];
            } else if (i === 0) {
                dp[i][j] = [
                    dp[i - 1][j][0] + currHPCost,
                    dp[i - 1][j][1] + currHP,
                ];
            } else {
                dp[i][j] = [
                    Math.min(dp[i - 1][j][0], dp[i][j - 1][0]) + currHPCost,
                ];
            }
        }
    }
}
