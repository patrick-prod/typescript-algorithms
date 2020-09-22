// class [class, preclass]
export default function canFinish(
    numCourses: number,
    prerequisites: number[][]
): boolean {
    let indegrees = new Array(numCourses).fill(0);
    let nextNodes = new Array(numCourses);
    for (let i = 0; i < numCourses; i++) {
        nextNodes[i] = [];
    }

    let queue: number[] = [];
    // push
    // shilft

    for (let [cur, pre] of prerequisites) {
        indegrees[cur] += 1; // 当前节点入度 + 1；
        nextNodes[pre].push(cur); // 前驱节点添加新边边；
    }

    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) queue.push(i);
    }

    while (queue.length) {
        let pre = queue.shift() as number;
        numCourses--;
        for (let cur of nextNodes[pre]) {
            indegrees[cur] -= 1;
            if (indegrees[cur] === 0) queue.push(cur);
        }
    }
    return !numCourses;
}

canFinish(3, [
    [1, 0],
    [1, 2],
    [0, 1],
]);

// [1, 2], [2, 3], [3, 1]
// [1, 2], [2, 1]
