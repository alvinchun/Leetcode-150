var canConstruct = function(ransomNote, magazine) {
    let magaHash = {};

    for (let c of magazine) {
        magaHash[c] = (magaHash[c] || 0) + 1;
    }

    for (let c of ransomNote) {
        if (!magaHash[c] || magaHash[c] <= 0) {
            return false;
        }
        magaHash[c]--;
    }
    
    return true;    
};

var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }

    for (const c of new Set(ransomNote)) {
        if (magazine.split(c).length - 1 < ransomNote.split(c).length - 1) {
            return false;
        }
    }

    return true;   
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {};
    for(let letter of magazine) {
        if (!map[letter]) {
            map[letter] = 0;
        }
        map[letter]++;
    }
    
    for(let letter of ransomNote) {
        if(!map[letter]) {
            return false;
        } 
        map[letter]--;
    }
    return true;
};

var canConstruct = function(ransomNote, magazine) {
    const freq = {};

    for (let char of magazine) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (!freq[char]--) return false;
    }

    return true;
};
