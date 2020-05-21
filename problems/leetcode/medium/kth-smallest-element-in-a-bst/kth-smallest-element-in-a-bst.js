// Approach 1: Recursion (DFS Inorder)
// Time complexity: O(N), to build a traversal.
// Space complexity: O(N), to keep an inorder traversal.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
    const dfs = (root, list) => {
        if (!root) return;
        dfs(root.left, list);
        list.push(root.val);
        dfs(root.right, list);
        return list;
    };

    const list = [];
    dfs(root, list);
    return list[k - 1];
};

// Approach 2: Iteration
// Time complexity: O(H + k), where H is a tree height.
// Space complexity: O(H + k), O(N + k) in the worst case, and O(logN + k) in the average case.
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
    if (!root) return null;
    const stack = [];

    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (--k == 0) break;
        root = root.right;
    }

    return root.val;
};
