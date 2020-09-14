export function binarySearch(nums: number[], target: number) {
    const n = nums.length;
    if (!n) return -1;
    let left = 0,
        right = n - 1;
    while (left <= right) {
        let middle = left + ((right - left) >> 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

export function binarySearchRightBorder(nums: number[], target: number) {
    const n = nums.length;
    if (!n) return -1;
    let left = 0,
        right = n;
    while (left < right) {
        let middle = left + ((right - left) >> 2);
        if (nums[middle] === target) {
            right = middle;
        } else if (nums[middle] > target) {
            right = middle;
        } else if (nums[middle] < target) {
            left = middle + 1;
        }
    }
    return left;
}

export function binarySearchLeftBorder(nums: number[], target: number) {
    const n = nums.length;
    if (!n) return -1;
    let left = 0,
        right = n;
    while (left < right) {
        let middle = left + ((right - left) >> 1);
        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return left;
}

console.log(binarySearchLeftBorder([1, 2, 4, 6], 5));
