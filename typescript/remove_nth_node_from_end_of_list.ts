function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy: ListNode = new ListNode(0, head);
  let l: ListNode = dummy;
  let r: ListNode | null = head;

  while (n > 0){
    r = r.next
    n--;
  }

  while (r !== null){
    l = l.next;
    r = r.next;
  }

  l.next = l.next.next;
  return dummy.next
};
