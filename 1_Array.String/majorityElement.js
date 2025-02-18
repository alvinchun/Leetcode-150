/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {};
    let res = 0;
    let majority = 0;

    for (let n of nums) {
        hash[n] = 1 + (hash[n] || 0);
        if (hash[n] > majority) {
            res = n;
            majority = hash[n];
        }
    }
    return res;    
};

var majorityElement = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
    
};

var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};