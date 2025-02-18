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


function majorityElement(nums: number[]): number {
    let candidate;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1
    }
    
    return candidate;
};

var majorityElement = function(nums) {
    // Initialize sol and cnt to store the solution and its frequency for respective iterations...
    let sol = 0, cnt = 0;
    // For every element i in the array...
    for(let i = 0; i < nums.length; i++ ) {
        // If cnt is equal to zero, update sol as sol = i
        if(cnt == 0){
            sol = nums[i];
            cnt = 1;
        }
        // If i is equal to candidate, increment cnt...
        else if(sol == nums[i]){
            cnt++;
        }
        // Otherwise, decrement cnt...
        else{
            cnt--;
        }
    }
    // Return & print the solution...
    return sol;
};

var majorityElement = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
    
};