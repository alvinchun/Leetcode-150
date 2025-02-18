var removeDuplicates1 = function(nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;    
};

console.log(removeDuplicates4([3,2,2,3,3,2,4,2]))

function removeDuplicates2(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1; // Initialize the count of unique elements to 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Overwrite the next unique element
            k++;
        }
    }

    return k;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates3 = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};


var removeDuplicates4 = function(nums) {
    let numbersSet = new Set(nums)
    let numArray = [...numbersSet];
    console.log(numArray);
    
    let k = numArray.length
    return k
};

var removeDuplicates5 = function(nums) {
    let k = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[k] !== nums[i]){
            num[i] == 
            k++
        } 
    }

    return k
};

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k++] = nums[i];
        }
    }

    return k;
};



console.log(removeDuplicates4([3,2,2,3]))
console.log(removeDuplicates5([3,2,3,2]))