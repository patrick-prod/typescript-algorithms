import { ListNode } from "./listNode";

export default function buildList(input: Array<number>): ListNode | null {
    let list = new ListNode(0);
    let head = list;
    input.forEach((item) => {
        list.next = new ListNode(item);
        list = list.next;
    });
    return head.next;
}
