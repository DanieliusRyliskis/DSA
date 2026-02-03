function hasCycle(head: ListNode | null): boolean {
  let l: ListNode = head;
  let r: ListNode = head;

  while (r !== null && r.next !== null){
    l = l.next;
    r = r.next.next;
    if (l === r) return true;
  }
  return false
};
