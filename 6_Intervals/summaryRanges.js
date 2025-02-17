// Runtime: 46 ms, faster than 86.21% of JavaScript online submissions for Summary Ranges.
// Time Complexity : O(N)
// Space Complexity : O(1)
var summaryRanges = function(nums) {
    // Create a list of string to store the output result...
    const output = [];
    // Start traversing the array from idx = 0 till idx < sizeofarray in a while loop.
    let idx = 0;
    while(idx < nums.length) {
        // Initialize beg and last index for identifying the continuous element in the array...
        let beg, last;
        // Mark the number at current index as beginning element of the range...
        beg = nums[idx];
        // Traverse the array beggining from current index & find the last element whose difference from previous element is exactly 1, i.e. nums[idx + 1] == nums[idx] + 1...
        while(idx+1 < nums.length && nums[idx+1] == nums[idx] + 1) 
            idx++;
        // Set this element as last element of the range...
        last = nums[idx];
        // If continuous element isn't present...
        if(beg == last)
            output.push(beg + "");
        // If present...
        else
            output.push( beg + "->" + last );
        idx++;          
    }
    return output;      // Return the output result list...
};

var summaryRanges = function(nums) {
    var t = 0
    var ans = []
    nums.push('#')
    for(var i=1;i<nums.length;i++)
        if(nums[i]-nums[t] !== i-t){
            if(i-t>1)
                ans.push(nums[t]+'->'+(nums[i-1]))
            else
                ans.push(nums[t].toString())
            t = i
        }
    return ans
}

function summaryRanges(nums) {
    var res = [];
    for (var i = 0, left = nums[0]; i < nums.length; i++) {
      if (nums[i] + 1 !== nums[i + 1]) {
        res.push(left === nums[i] ? '' + nums[i] : left + '->' + nums[i]);
        left = nums[i + 1];
      }
    }
    return res;
  }