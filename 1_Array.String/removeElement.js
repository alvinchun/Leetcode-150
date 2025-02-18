var removeElement1 = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

var removeElement2 = function(nums, val) {
    var zeroStartIdx = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[zeroStartIdx]=nums[i];
            zeroStartIdx++
        }
    }
    return zeroStartIdx; 
};

function removeElement3(nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
}


var removeElement4 = function(nums, val) {
    let j = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[j] = nums[i]
            j++
        }
    }

    return j
};

console.log(removeElement1([3,2,2,3], 3))
console.log(removeElement2([3,2,2,3], 3))
console.log(removeElement3([3,2,2,3], 3))
console.log(removeElement4([3,2,2,3], 3))