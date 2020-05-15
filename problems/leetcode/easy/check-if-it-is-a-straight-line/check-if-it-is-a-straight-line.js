/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = (coordinates) => {
    const x0 = coordinates[0][0];
    const y0 = coordinates[0][1];
    const x1 = coordinates[1][0];
    const y1 = coordinates[1][1];
    const dx = x1 - x0;
    const dy = y1 - y0;

    for (const co of coordinates) {
        const x = co[0];
        const y = co[1];
        if (dx * (y - y1) != dy * (x - x1)) return false;
    }

    return true;
};
