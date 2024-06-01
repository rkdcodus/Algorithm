class MinHeap {
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
      if (this.heap[parentIdx] <= this.heap[idx]) break;
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let idx = 0;
    while (this.getLeftChildIdx(idx) < this.heap.length) {
      let smallerChildIdx = this.getLeftChildIdx(idx);
      const rightChildIdx = this.getRightChildIdx(idx);
      if (
        rightChildIdx < this.heap.length &&
        this.heap[smallerChildIdx] > this.heap[rightChildIdx]
      ) {
        smallerChildIdx = rightChildIdx;
      }

      if (this.heap[smallerChildIdx] >= this.heap[idx]) break;
      this.swap(smallerChildIdx, idx);
      idx = smallerChildIdx;
    }
  }

  size() {
    return this.heap.length;
  }
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n, ...testcases] = input;
const answer = [];

for (let i = 0; i < n; i++) {
  const minHeap = new MinHeap();
  let totalcost = 0;
  const fileSizes = testcases[i * 2 + 1];

  fileSizes.forEach((size) => {
    minHeap.push(size);
  });

  while (minHeap.size() > 1) {
    const file1 = minHeap.pop();
    const file2 = minHeap.pop();
    const fileSize = file1 + file2;
    totalcost += fileSize;
    minHeap.push(fileSize);
  }

  answer.push(totalcost);
}

console.log(answer.join("\n"));
