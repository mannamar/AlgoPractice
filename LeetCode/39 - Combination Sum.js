// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/


var combinationSum = function(candidates, target) {
    let res = []
    getCombinations(0, [], 0);
    return res;
    
    function getCombinations(i, arr, sum) {
        // Stop conditions
        // If current solution sums to target
        if (sum === target) {
            // Add solution to result and return
            res.push(arr.slice());
            return
        }
        // If i is out of bounds or sum is greater than target, return
        if (i >= candidates.length || sum > target) {
            return;
        }

        // Add current num to sum and continue at current number
        arr.push(candidates[i]);
        sum += candidates[i];
        getCombinations(i, arr, sum);

        // Backtrack and continue at next number
        arr.pop();
        sum -= candidates[i];
        getCombinations(i+1, arr, sum);
    }
};