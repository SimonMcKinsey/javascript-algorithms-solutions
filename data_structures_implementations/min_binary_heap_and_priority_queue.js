class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
    this.insertTime = new Date.now(); // Future case for if priorities are equal, which priority was 1st.
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
    }

    bubbleDown();
    return min;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); // parent = childIndex-1 / 2
      let parent = this.values[parentIndex];

      if (element.priority >= parent.priority) break;

      //   [parent, element] = [element, parent];
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let length = this.values.length - 1;
    let index = 0;
    const element = this.values[0];

    // while (index < length) {
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (!swap && rightChild.priority > element.priority) ||
          (!swap && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("special cold", 2);
ER.enqueue("head injury", 0);

console.log(heap);
