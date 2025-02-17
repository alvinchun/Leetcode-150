// Runtime: 83 ms, faster than 88.18% of JavaScript online submissions for Isomorphic Strings.
// Time Complexity : O(n)
var isIsomorphic = function(s, t) {
    // Base case: for different length of two strings...
    if(s.length != t.length)
        return false;
    // Create two maps for s & t strings...
    const map1 = [256];
    const map2 = [256];
    // Traverse all elements through the loop...
    for(let idx = 0; idx < s.length; idx++){
        // Compare the maps, if not equal, return false...
        if(map1[s.charAt(idx)] != map2[t.charAt(idx)])
            return false;
        // Insert each character if string s and t into seperate map...
        map1[s.charAt(idx)] = idx + 1;
        map2[t.charAt(idx)] = idx + 1;
    }
    return true;    // Otherwise return true...
};

var isIsomorphic = function(s, t) {
    const charIndexS = {};
    const charIndexT = {};

    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in charIndexS)) {
            charIndexS[s[i]] = i;
        }

        if (!(t[i] in charIndexT)) {
            charIndexT[t[i]] = i;
        }

        if (charIndexS[s[i]] !== charIndexT[t[i]]) {
            return false;
        }
    }

    return true;    
};

var isIsomorphic = function(s, t) {
    const charMap = {};

    for (let i = 0; i < s.length; i++) {
        const sc = s[i];
        const tc = t[i];

        if (charMap[sc]) {
            if (charMap[sc] !== tc) {
                return false;
            }
        } else if (Object.values(charMap).includes(tc)) {
            return false;
        }

        charMap[sc] = tc;
    }

    return true;    
};