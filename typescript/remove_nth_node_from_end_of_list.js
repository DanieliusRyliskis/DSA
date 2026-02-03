function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head);
    let l = dummy;
    let r = head;
    while (n > 0) {
        r = r.next;
        n--;
    }
    while (r !== null) {
        l = l.next;
        r = r.next;
    }
    l.next = l.next.next;
    return dummy.next;
}
;
