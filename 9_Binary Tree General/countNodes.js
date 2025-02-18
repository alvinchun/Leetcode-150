var countNodes = function(root) {
    
    function leftDepth(node) {
        if(!node) return 0;
        return leftDepth(node.left) + 1;
    }
    
    function rightDepth(node) {
        if(!node) return 0;
        return rightDepth(node.right) + 1;
    }
    
    function traverse(node) {
        const leftLen = leftDepth(node);
        const rightLen = rightDepth(node);
        
        if(leftLen === rightLen) return Math.pow(2, leftLen) - 1;
        return traverse(node.left) + traverse(node.right) + 1;
    }
    return traverse(root);
};

var countNodes = function (r) {

    function dfs(r) {
      if (!r) return 0;
  
      let ll = dfs(r.left)
      let rr = dfs(r.right)
  
      return 1 + ll + rr;
    }
  
    return dfs(r);
  };

  var countNodes = function(root) {
    if (!root) return 0;

    function leftDepth(node) {
        let depth = 0;
        while (node) {
            depth++;
            node = node.left;
        }
        return depth;
    }

    function rightDepth(node) {
        let depth = 0;
        while (node) {
            depth++;
            node = node.right;
        }
        return depth;
    }

    const leftLen = leftDepth(root);
    const rightLen = rightDepth(root);

    if (leftLen === rightLen) return Math.pow(2, leftLen) - 1;

    return 1 + countNodes(root.left) + countNodes(root.right);
};
