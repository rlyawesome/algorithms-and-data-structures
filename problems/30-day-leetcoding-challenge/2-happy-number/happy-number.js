/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    const map = {};

    while (true) {
        if (n == 1) return true;
        n = sumSquareDigits(n);
        if (map[n]) return false;
        map[n] = n;
    }
};

const sumSquareDigits = (n) => {
    let sum = 0;

    while (n > 0) {
        const digit = n % 10;
        n = Math.floor(n / 10);
        sum += digit * digit;
    }

    return sum;
};
