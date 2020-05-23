/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
const intervalIntersection = (A, B) => {
    const ans = [];
    let i = 0;
    let j = 0;

    while (i < A.length && j < B.length) {
        const a = A[i];
        const b = B[j];
        const start = Math.max(a[0], b[0]);
        const end = Math.min(a[1], b[1]);
        if (start <= end) ans.push([start, end]);
        if (end == a[1]) i++;
        if (end == b[1]) j++;
    }

    return ans;
};
