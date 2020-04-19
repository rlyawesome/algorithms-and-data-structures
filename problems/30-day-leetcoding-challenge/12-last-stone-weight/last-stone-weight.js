/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        const N = stones.length;
        stones = stones.sort((a, b) => a - b);
        if (stones[N - 2] == stones[N - 1]) {
            stones.splice(N - 2, 2);
        } else {
            stones.splice(N - 2, 2, stones[N - 1] - stones[N - 2]);
        }
    }

    return stones.length ? stones[0] : 0;
};
