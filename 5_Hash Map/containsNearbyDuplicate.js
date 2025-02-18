// Time Complexity : O(n)
// Space Complexity : O(n)
var containsNearbyDuplicate = function(nums, k) {
    const hasmap = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        // Check if the difference betweend duplicates is less than k
        if (idx - hasmap.get(nums[idx]) <= k) {
            return true;
        }
        hasmap.set(nums[idx], idx);
    }
    return false;
};

var containsNearbyDuplicate = function(nums, k) {
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (seen.hasOwnProperty(val) && i - seen[val] <= k) {
            return true;
        }
        seen[val] = i;
    }

    return false;
};

var containsNearbyDuplicate = function(nums, k) {
    const seen = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (i > k) {
            seen.delete(nums[i - k - 1]);
        }

        if (seen.has(nums[i])) {
            return true;
        }

        seen.add(nums[i]);
    }

    return false;
};

var containsNearbyDuplicate = function(nums, k) {
    const seen = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) return true;

        seen.add(nums[i]);

        if (seen.size > k) {
            seen.delete(nums[i - k]);
        }
    }

    return false;
};
