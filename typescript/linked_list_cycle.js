function hasCycle(head) {
    let l = head;
    let r = head;
    while (r !== null && r.next !== null) {
        l = l.next;
        r = r.next.next;
        if (l === r)
            return true;
    }
    return false;
}
;
