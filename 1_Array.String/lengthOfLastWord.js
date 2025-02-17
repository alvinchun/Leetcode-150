var lengthOfLastWord = function(s) {
    s = s.trim();
    
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
        }
        else if (length > 0) {
            break;
        }
    }
    
    return length;
};

var lengthOfLastWord = function(s) {
    let end = s.length - 1;

    while (end >= 0 && s[end] === ' ') {
        end--;
    }

    let start = end;
    while (start >= 0 && s[start] !== ' ') {
        start--;
    }

    return end - start;    
};

var lengthOfLastWord = function(s) {
    let length = 0;
    let counting = false;

    for (let c of s) {
        if (c !== ' ') {
            if (!counting) {
                counting = true;
                length = 1;
            } else {
                length++;
            }
        } else {
            counting = false;
        }
    }

    return length;    
};