function reorderList(head) {
    // Find middle
    let l = head;
    // Start at the second node, otherwise even lenght lists wouldn't be divided equally.
    let r = head.next;
    // r.next can't be evaluated if r = null, the condition is checked before each iteration
    while (r !== null && r.next !== null) {
        l = l.next;
        r = r.next.next;
    }
    // Reverse
    // Beginning of the second half
    let second = l.next;
    // In order to split them, remove the link
    l.next = null;
    let prev = null;
    while (second) {
        let tmp = second.next;
        second.next = prev;
        prev = second;
        second = tmp;
    }
    // Merge
    // second is null, but the prev still holds the end value
    let first = head;
    second = prev;
    // second is always the same lenght or shorter than the first half, so this condition sufficient alone
    while (second) {
        let tmp1 = first.next;
        let tmp2 = second.next;
        first.next = second;
        // tmp1 because inserting second node between first and first.next
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
}
