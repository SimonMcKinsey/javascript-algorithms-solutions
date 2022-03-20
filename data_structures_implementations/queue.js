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

  shift() {
    if (!this.head) {
      return null;
    }

    let poppedNode = null;
    if (this.length === 1) {
      // meaning head === tail
      this.poppedNode = this.tail;
      this.head = null;
      this.tail = this.head;
    } else {
      poppedNode = this.head;
      this.head = this.head.next;
    }

    this.length--;
    return poppedNode;
  } // as pop
}

class Queue {
  // We would like to achieve a case where:
  // 1) pop() will be shift() due to how easy it is to dispose the current first item
  // 2) push() will be push() due to how convenient it is to push to the end of list as last item
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(val) {
    return this.linkedList.addToTail(val);
  }

  pop() {
    return this.linkedList.shift(); // this is not a constant time.
  }

  popAsShift() {
    // The better one (shifting)
    return this.linkedList.shift();
  }
}

let queue = new Queue();
queue.push(1); // 1
queue.push(2); // 1,2
queue.push(3); // 1,2,3
queue.pop(); // 2,3
queue.pop(); // 3
queue.push("test"); // 3, test
console.log(queue);
