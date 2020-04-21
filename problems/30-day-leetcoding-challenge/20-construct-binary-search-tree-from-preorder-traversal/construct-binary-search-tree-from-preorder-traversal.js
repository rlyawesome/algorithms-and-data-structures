/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = (preorder) => {
    const dfs = (preorder, bound) => {
        if (index == preorder.length || preorder[index] > bound) return null;
        const root = new TreeNode(preorder[index++]);
        root.left = dfs(preorder, root.val);
        root.right = dfs(preorder, bound);
        return root;
    };

    let index = 0;
    return dfs(preorder, Number.MAX_SAFE_INTEGER);
};
