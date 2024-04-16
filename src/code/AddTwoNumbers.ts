class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, num1: string = '', num2: string = '' ): ListNode | null {
    if(l1 || l2) {
        num1 = (l1 ? l1.val.toString() : '') + num1; 
        num2 = (l2 ? l2.val.toString() : '') + num2;
        return addTwoNumbers(l1 && l1.next, l2 && l2.next, num1, num2);
    } else {
        let result = (Number(num1) + Number(num2)).toString();
        let listItem : ListNode | null = null;
        for(let i = 0; i < result.length; i++){
            listItem = new ListNode(Number(result[i]), listItem);
        }
        return listItem;
    }
};

const l1: ListNode = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
const l2: ListNode = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
let finalList = addTwoNumbers(l1, l2);