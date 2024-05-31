const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChildIdx(idx) {
    return idx * 2 + 1;
  }

  getRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = this.getParentIdx(idx);
      if (this.heap[idx] > this.heap[parentIdx]) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let idx = 0;
    while (this.getLeftChildIdx(idx) < this.heap.length) {
      let largerChild = this.getLeftChildIdx(idx);
      const rightChild = this.getRightChildIdx(idx);
      if (rightChild < this.heap.length && this.heap[largerChild] < this.heap[rightChild]) {
        largerChild = rightChild;
      }

      if (this.heap[largerChild] <= this.heap[idx]) break;
      this.swap(idx, largerChild);
      idx = largerChild;
    }
  }
}

const maxHeap = new MaxHeap();
const answer = [];

input.slice(1).forEach((value) => {
  if (!value) return answer.push(maxHeap.pop());
  maxHeap.push(value);
});

console.log(answer.join("\n"));
