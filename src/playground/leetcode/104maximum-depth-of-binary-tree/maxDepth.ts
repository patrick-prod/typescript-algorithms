import TreeNode from "../../../utils/leetcode/TreeNode";
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export default function maxDepth(root: TreeNode | null): number {
    return !root
        ? 0
        : Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
}
