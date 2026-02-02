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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    //initialize a dummy node to act as the starting point of result list
    const dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    //continue interating as long as there are nodes in l1 or l2 or remaining carry
    while(l1 !== null || l2 !== null || carry !== 0){
        //extract values from the current node, defealting to 0 if the node is null
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val :0

        //calculate the sum and new carry
        const sum = v1 + v2 + carry
        carry = Math.floor(sum /10)
        
        //create a new node with digit value and attach it to the result list
        curr.next = new ListNode(sum % 10)
        curr = curr.next

        //advance the pointer for l1 and l2 if they are not null
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
       
    } 
        //return next node of dummy(actual head of the result)
        return dummy.next
};