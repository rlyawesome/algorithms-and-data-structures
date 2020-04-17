// Time complexity: O(N). We visit every node once.
// Space complexity: O(N), the size of our implicit call stack during our depth-first search
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
    const dfs = (root) => {
        // [diameter, depth]
        if (root == null) return [0, 0];
        let L = dfs(root.left);
        let R = dfs(root.right);
        let diam = Math.max(L[0], R[0], L[1] + R[1]);
        return [diam, Math.max(L[1], R[1]) + 1];
    };

    return dfs(root)[0];
};

/**
 * Implement using Pair prototype
 */
function Pair(diam, depth) {
    this.diam = diam;
    this.depth = depth;
}

Pair.prototype.first = function () {
    return this.diam;
};

Pair.prototype.second = function () {
    return this.depth;
};

const diameterOfBinaryTree = (root) => {
    const dfs = (root) => {
        // [diameter, depth]
        if (root == null) return new Pair(0, 0);
        let L = dfs(root.left);
        let R = dfs(root.right);
        let diam = Math.max(L.first(), R.first(), L.second() + R.second());
        return new Pair(diam, Math.max(L.second(), R.second()) + 1);
    };

    return dfs(root).first();
};

/**
 * Implement using Pair class
 */
class Pair {
    constructor(diam, depth) {
        this._diam = diam;
        this._depth = depth;
    }

    get diam() {
        return this._diam;
    }

    get depth() {
        return this._depth;
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
    const dfs = (root) => {
        // [diameter, depth]
        if (root == null) return new Pair(0, 0);
        let L = dfs(root.left);
        let R = dfs(root.right);
        let diam = Math.max(L.diam, R.diam, L.depth + R.depth);
        return new Pair(diam, Math.max(L.depth, R.depth) + 1);
    };

    return dfs(root).diam;
};
