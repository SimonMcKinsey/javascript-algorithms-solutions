class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
    }

    bubbleDown();
    return max;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); // parent = childIndex-1 / 2
      let parent = this.values[parentIndex];

      if (element <= parent) break;

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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (!swap && rightChild > element) ||
          (!swap && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);
