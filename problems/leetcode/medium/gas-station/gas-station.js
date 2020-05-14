/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
    let tank = 0;
    let total = 0;
    let ans = 0;

    for (let i = 0; i < gas.length; i++) {
        const current = gas[i] - cost[i];
        tank += current;
        total += current;

        if (tank < 0) {
            ans = i + 1;
            tank = 0;
        }
    }

    return total < 0 ? -1 : ans;
};
