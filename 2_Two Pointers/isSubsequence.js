const isSubsequence = (s, t) => {
    //! Edge case
    if (s.length > t.length) return false; //! if len of s is greater than len of t, return false because s cant be a subsequence of t
    `
    Example:
      s='Leetcode'
      t='Code'
      here we are trying to find if 'Leetcode' is a subsequence of 'Code' which is not possible because 'Leetcode' is longer than 'Code'
  
    `;
    const t_length = t.length;
    let subsequence = 0;
    for (let i = 0; i < t_length; i++) {
      if (s[subsequence] === t[i]) {
        // ! if it is matching, increment subsequence
        subsequence++;
      }
    }
    return subsequence === s.length
  };


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sp = 0;
    let tp = 0;

    while (sp < s.length && tp < t.length) {
        if (s[sp] === t[tp]) {
            sp++;
        }
        tp++;
    }

    return sp === s.length;    
};

const isSubsequence = (s, t) => {
  if (s.length === 0) return true;  // Empty string is always a subsequence
  if (s.length > t.length) return false;

  let i = 0;
  for (let char of t) {
      if (char === s[i]) {
          i++;
          if (i === s.length) return true;  // Stop early if we found all characters
      }
  }

  return false;
};
