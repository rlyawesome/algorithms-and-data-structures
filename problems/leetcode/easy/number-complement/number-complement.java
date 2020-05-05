class Solution {
    public int findComplement(int num) {
        int X = 1;
        while (num > X) X = X * 2 + 1;
        return X - num;
    }
}