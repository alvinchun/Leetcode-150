var twoSum = function(nums, target) {
    const pairIdx = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in pairIdx) {
            return [i, pairIdx[target - num]];
        }
        pairIdx[num] = i;
    }    
};

var twoSum = function(nums, target) {
    // Create an object to store numbers and their corresponding indices
    let numToIndexMap = {};

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the difference between the target and the current number
        let diff = target - nums[i];

        // Check if the difference already exists in the object
        if (numToIndexMap.hasOwnProperty(diff)) {
            // If it exists, return the indices of the current number and the number that adds up to the target
            return [i, numToIndexMap[diff]];
        }

        // If it doesn't exist, add the current number and its index to the object
        numToIndexMap[nums[i]] = i;
    }

    // If no two numbers add up to the target, return null
    return null;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
	return [];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let hash = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [];
}