interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}

type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    
    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    insertAt(item: T, idx: number): void {
        if(idx > this.length) {
            throw new Error("oh no")
        }

        
        if (idx === this.length) {
            this.append(item);
            return;
        } else if(idx === 0) {
            this.prepend(item);
            return
        }
        
        this.length++;
        let curr = this.head;
        for(let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        curr = curr as Node<T>;
        const node = {value: item} as Node<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if(curr.prev) {
            curr.prev.next = curr;
        }
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if(curr.value === item) {
                break;
            }
            curr = curr.next;
        }
        if(!curr) {
            return undefined;
        }

        this.length--;

        if(this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }
        if(curr.prev) {
            curr.prev.next = curr.next;
        }
        if(curr.next) {
            curr.next.prev = curr.prev;
        }
        
        if(curr === this.head) {
            this.head = curr.next;
        }
        if(curr === this.tail) {
            this.tail = curr.prev;
        }

        curr.prev = curr.next = undefined;
        return curr.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if(!node) {
            return undefined;
        }
    }

    append(item: T): void {
        
        this.length++;
        const node = {value: item} as Node<T>;
        if(!this.tail) {
            this.head = this.tail = node;
            return
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    prepend(item: T): void {
        
        this.length++;
        const node = {value: item} as Node<T>;
        if(!this.head) {
            this.head = this. tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for(let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr;
    }
}