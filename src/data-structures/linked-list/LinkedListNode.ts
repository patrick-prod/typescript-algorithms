export default class LinkListNode<T> {
    public value: T;
    public next: LinkListNode<T>;

    constructor(value: T, next?: LinkListNode<T>) {
        this.value = value;
        this.next = next;
    }

    toString(callback?: (value: T) => string) {
        return callback ? callback(this.value) : this.value;
    }
}
