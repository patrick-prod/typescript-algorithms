export default function spiralOrder(matrix: number[][]): number[] {
    let m = matrix.length;
    let n = matrix[0].length;
    let visited = new Array(m);
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false);
    }
    let res: number[] = [];
    dfs(matrix, visited, res, 0, 0);
    return res;
}

function dfs(
    matrix: number[][],
    visited: boolean[][],
    res: number[],
    i: number,
    j: number
): boolean {
    let m = matrix.length;
    let n = matrix[0].length;

    if (visited[i][j]) return false;

    let curr = matrix[i][j];

    res.push(curr);
    visited[i][j] = true;

    if (j >= 0 && j + 1 < n && dfs(matrix, visited, res, i, j + 1)) {
        return true;
    } else if (i >= 0 && i + 1 < m && dfs(matrix, visited, res, i + 1, j)) {
        return true;
    } else if (j - 1 >= 0 && j < n && dfs(matrix, visited, res, i, j - 1)) {
        return true;
    } else if (i - 1 >= 0 && i < m && dfs(matrix, visited, res, i - 1, j)) {
        return true;
    }

    return false;
}

let res = spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]);

console.log(res);
