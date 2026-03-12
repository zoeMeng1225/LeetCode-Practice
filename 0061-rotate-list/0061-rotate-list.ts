/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head || !head.next || k === 0) return head;

    //get length and find tail
    let n = 1;
    let tail = head;
    while(tail.next){
        tail = tail.next;
        n++;
    }

    //reduce rotations(k mod n)
    k = k % n;
    if(k === 0) return head;

    //connect tail to head(make a ring)
    tail.next = head;

    //move to the new tail(n - k steps)
    let stepsToNewTail = n - k;
    let newTail = tail;
    while(stepsToNewTail > 0){
        newTail = newTail.next!;
        stepsToNewTail--;
    }

    //set new head & break the ring
    const newHead = newTail.next;
    newTail.next = null;

    return newHead

};