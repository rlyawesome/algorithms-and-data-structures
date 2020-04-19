// Time Complexity: O(N), where N is the length of the string. We iterate through the string once.
// Space Complexity: O(1), the space used by our lo and hi pointers. However, creating a new character array will take O(N) space.

// Approach 1: Greedy
/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
    let lo = 0;
    let hi = 0;

    for (const c of s) {
        lo += c == '(' ? 1 : -1;
        hi += c != ')' ? 1 : -1;
        if (hi < 0) return false;
        lo = Math.max(lo, 0);
    }

    return lo == 0;
};

// Approach 2
/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
    const N = s.length;
    let balance = 0;

    for (let i = 0; i < N; i++) {
        const c = s.charAt(i);

        if (c == '(' || c == '*') {
            balance++;
        } else if (--balance == -1) {
            return false;
        }
    }

    balance = 0;

    for (let i = N - 1; i >= 0; i--) {
        const c = s.charAt(i);

        if (c == ')' || c == '*') {
            balance++;
        } else if (--balance == -1) {
            return false;
        }
    }

    return true;
};
