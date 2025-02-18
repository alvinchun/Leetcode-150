var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let cur = dummy;

    while (list1 && list2) {
        if (list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }

    cur.next = list1 || list2;

    return dummy.next;    
};

var mergeTwoLists = function(list1, list2) {
    if (!list1 || !list2) {
        return list1 ? list1 : list2;
    }

    if (list1.val > list2.val) {
        [list1, list2] = [list2, list1];
    }

    list1.next = mergeTwoLists(list1.next, list2);
    return list1;   
};

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;
    return dummy.next;
};
