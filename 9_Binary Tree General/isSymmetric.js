var isSymmetric = function(root) {
    // Special case...
    if (!root)
        return true;
    // Return the function recursively...
    return isSame(root.left, root.right);
};
// A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
var isSame = function (leftroot, rightroot) {
    // If both root nodes are null pointers, return true...
    // If exactly one of them is a null node, return false...
    // If root nodes haven't same value, return false...
    if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val))
        return false;
    // Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
    if (leftroot && rightroot)
        return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
    return true;
};

var isSymmetric = function(root) {
    const isMirror = (n1, n2) => {
        if (!n1 && !n2) {
            return true;
        }
        
        if (!n1 || !n2) {
            return false;
        }
        
        return n1.val === n2.val && isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
    };
    
    return isMirror(root.left, root.right);
};

var isSymmetric = function(root) {
    if (!root) return true;
    
    function isMirror(t1, t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2 || t1.val !== t2.val) return false;
        
        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }

    return isMirror(root.left, root.right);
};
