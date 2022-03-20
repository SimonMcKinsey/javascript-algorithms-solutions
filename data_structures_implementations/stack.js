// Singly Linked List implementation:
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this.length;
  }

  removeFromTail() {
    if (!this.tail) {
      return null;
    }
    if (this.length === 1) {
      // all null actually
      this.head = null;
      this.tail = this.head;
    } else {
      let current = this.head;
      for (let i = 0; i < this.length - 1; i++) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.length--;
  }

  shift() {} // as pop
  unshift(val) {
    // as push
  }
}

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(val) {
    return this.linkedList.addToTail(val);
  }

  pop() {
    return this.linkedList.removeFromTail(); // this is not a constant time.
  }

  popAsShift() {
    // The better one (shifting)
    return this.linkedList.shift();
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.push("test");
console.log(stack);
