class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// This implementation needs extra checking by me.
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  length() {
    if (!this.head) {
      return 0;
    }

    let current = head;
    let length = 0;

    while (current) {
      current = current.next;
      length++;
    }

    this.length = length;
    return this.length;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let newTail = null;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    current.next = null;
    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (this.length === 1) {
      // || this.head === this.tail
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!head) {
      return;
    }

    let current = this.head;
    this.head = current.next;

    if (this.length === 1) {
      this.tail = null;
    }

    this.length--;
    return current;
  }

  unshift(val) {
    let node = new Node(val);
    if (!head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = next;

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let current = this.head;
    let counter = 0;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) {
      return false;
    }

    node.val = val;
    return this;
  }

  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
      return;
    }
    let node = this.get(index - 1); // previous
    if (!node) {
      this.push(val);
      return;
    }

    let newNode = new Node(val);
    let next = node.next;
    node.next = newNode;
    newNode.next = next;

    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return;
    }
    if (index === 0) {
      this.shift();
      return;
    }
    if (index === this.length - 1) {
      this.pop();
      return;
    }

    let previous = this.get(index - 1);
    if (!previous) {
      return;
    }

    let removed = previous.next;
    previous.next = removed.next;

    this.length--;
    return removed;
  }

  reverse() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let previous = null;

    while (current) {
      let next = current.next;
      current = next;
      current.next = previous;
      previous = current;
    }

    return previous;
  }
}
