// Approach 1: Prototype

var StockSpanner = function () {
    this.prices = [];
    this.weights = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let weight = 1;

    while (this.prices.length && this.prices[this.prices.length - 1] <= price) {
        this.prices.pop();
        weight += this.weights.pop();
    }

    this.prices.push(price);
    this.weights.push(weight);
    return weight;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// Approach 2: Class
class StockSpanner {
    prices = [];
    weights = [];

    next = (price) => {
        let w = 1;

        while (this.prices.length && this.prices[this.prices.length - 1] <= price) {
            this.prices.pop();
            w += this.weights.pop();
        }

        this.prices.push(price);
        this.weights.push(w);

        return w;
    };
}
