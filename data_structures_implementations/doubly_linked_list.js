class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// This implementation needs extra checking by me.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.prev = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!head) {
      // || this.length === 0
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length++;
    return this;
  }

  pop() {
    if (!head) {
      return;
    }

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!head) {
      return;
    }

    let shiftedNode = head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length--;
    return shiftedNode;
  }

  unshift(val) {}

  get(index) {}

  set(index, val) {}

  insert(index, val) {}

  remove(index) {}

  reverse() {}
}
