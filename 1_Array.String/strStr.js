var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) {
        return -1;
    }
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    
    return -1;    
};

/**
 * Solution #1 - Built-in function
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};

/**
 * Solution #2 - RegExp
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const regex = new RegExp(needle);
    return haystack.search(regex);
};

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
