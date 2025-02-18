var merge = function(nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    
    return nums1.sort((a, b) => a - b);
};

var merge3 = function(nums1, m, nums2, n) {
    let answer = [];

    for(let i=0;i<m;i++){
        answer.push(nums1[i])
    }

    for(let j=0;j<n;j++){
        answer.push(nums2[j])
    }

    return answer.sort((a, b) => a - b);
};

var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Last element in nums1's valid portion
    let j = n - 1; // Last element in nums2
    let k = m + n - 1; // Last position in nums1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};


console.log(merge([1,2,3,100,200,300], 3, [2,5,6], 3))
console.log(merge([1], 1, [], 0))
console.log(merge([0], 0, [1], 1))


console.log(merge3([1,2,3,100,200,300], 3, [2,5,6], 3))
console.log(merge3([1], 1, [], 0))
console.log(merge3([0], 0, [1], 1))