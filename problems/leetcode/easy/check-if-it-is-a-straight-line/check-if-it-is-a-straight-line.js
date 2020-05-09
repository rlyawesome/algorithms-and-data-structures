/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = (coordinates) => {
    const calcSlope = (first, second) => {
        return (second[1] - first[1]) / (second[0] - first[0]);
    };

    if (coordinates.length < 3) return true;
    const slope = calcSlope(coordinates[0], coordinates[1]);

    for (let i = 2; i < coordinates.length; i++) {
        if (calcSlope(coordinates[i - 1], coordinates[i]) != slope) {
            return false;
        }
    }

    return true;
};
