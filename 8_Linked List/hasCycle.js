const hasCycle = (head) => {
    let fast = head;
    while (fast && fast.next) {
      head = head.next;
      fast = fast.next.next;
      if (head === fast) return true;
    }
    return false;
  };

  /**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow_pointer = head, fast_pointer = head;
    while (fast_pointer !== null && fast_pointer.next !== null) {
        slow_pointer = slow_pointer.next;
        fast_pointer = fast_pointer.next.next;
        if (slow_pointer === fast_pointer) {
            return true;
        }
    }
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visited_nodes = new Set();
    let current_node = head;
    while (current_node !== null) {
        if (visited_nodes.has(current_node)) {
            return true;
        }
        visited_nodes.add(current_node);
        current_node = current_node.next;
    }
    return false;
};

const hasCycle = function(head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }

    return false;
};
