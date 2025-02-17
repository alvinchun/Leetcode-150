var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));    
};

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    const queue = [];
    queue.push(root);
    let depth = 0;

    while (queue.length > 0) {
        depth++;

        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return depth;    
};

var maxDepth = function(root) {
    if(root === undefined || root===null){
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};