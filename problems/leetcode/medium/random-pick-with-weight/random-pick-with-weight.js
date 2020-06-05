/**
 * @param {number[]} w
 */
class Solution {
  probabilities = [];
  total = 0;
  constructor(w) {
    for (let i = 0; i < w.length; i++) {
      this.total += w[i];
      this.probabilities[i] = this.total;
    }
  }

  pickIndex = () => {
    const probability = Math.floor(Math.random() * this.total);
    return this.findIndex(probability);
  };

  findIndex = (probability) => {
    let lo = 0;
    let hi = this.probabilities.length - 1;

    while (lo < hi) {
      const mid = Math.floor(lo + (hi - lo) / 2);

      if (this.probabilities[mid] > probability) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    return lo;
  };
}
