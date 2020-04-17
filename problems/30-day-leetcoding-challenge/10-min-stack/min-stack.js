/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * #1 - Implement with prototypes
 */
var MinStack = function () {
    this.items = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    const N = this.items.length;
    this.items.push([x, !N ? x : Math.min(x, this.items[N - 1][1])]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.items.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    const N = this.items.length;
    return this.items[N - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    const N = this.items.length;
    return this.items[N - 1][1];
};

/**
 * #2 - Implement with classes
 */
class MinStack {
    items = [];

    push = (x) => {
        const N = this.items.length;
        const min = N ? Math.min(x, this.items[N - 1][1]) : x;
        this.items.push([x, min]);
    };

    pop = () => {
        this.items.pop();
    };

    top = () => {
        return this.items[this.items.length - 1][0];
    };

    getMin = () => {
        return this.items[this.items.length - 1][1];
    };
}
