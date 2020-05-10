/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (N, trust) => {
    const counts = new Array(N + 1).fill(0);

    for (const t of trust) {
        counts[t[0]]--;
        counts[t[1]]++;
    }

    for (let i = 1; i <= N; i++) {
        if (counts[i] == N - 1) return i;
    }

    return -1;
};
