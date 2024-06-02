class Heap {
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

  size() {
    return this.heap.length;
  }

  peek() {
    return this.size() ? this.heap[0] : null;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyUp() {}

  heapifyDown() {}
}

class MinHeap extends Heap {
  heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = this.getParentIdx(idx);
      if (this.heap[parentIdx] <= this.heap[idx]) break;
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
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
}

class MaxHeap extends Heap {
  heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = this.getParentIdx(idx);
      if (this.heap[parentIdx] >= this.heap[idx]) break;
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
  }

  heapifyDown() {
    let idx = 0;
    while (this.getLeftChildIdx(idx) < this.heap.length) {
      let largerChildIdx = this.getLeftChildIdx(idx);
      const rightChildIdx = this.getRightChildIdx(idx);
      if (
        rightChildIdx < this.heap.length &&
        this.heap[largerChildIdx] < this.heap[rightChildIdx]
      ) {
        largerChildIdx = rightChildIdx;
      }

      if (this.heap[largerChildIdx] <= this.heap[idx]) break;
      this.swap(largerChildIdx, idx);
      idx = largerChildIdx;
    }
  }
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
// 최소 힙, 최대 힙 사용하기
const minHeap = new MinHeap(); // 중간값 이상은 최소 힙으로
const maxHeap = new MaxHeap(); // 중간값 이하는 최대 힙으로
// 그럼 최소힙root는 중간값의 큰 값, 최대힙의 root는 중간값의 작은값이 된다.
const answer = [];

input.slice(1).forEach((value) => {
  // 최소힙과 최대힙의 크기를 같도록 유지해야 중간값이 맞춰진다.
  // 최대힙부터 먼저 넣는다. 그래야 항상 중간값은 최대 힙 루트에 위치하게 됨. 홀수 개일 때 최대 힙 루트에 중간값이 위치하게 됨.
  if (minHeap.size() === maxHeap.size()) {
    maxHeap.push(value);
  } else {
    minHeap.push(value);
  }

  // 최대 힙과 최소 힙의 root 값 비교 후 재위치.
  // 새로들어온 값을 비교 후 다시 정렬한다 생각하면 됌.
  if (minHeap.size() && maxHeap.peek() > minHeap.peek()) {
    minHeap_max = minHeap.pop();
    maxHeap_min = maxHeap.pop();
    minHeap.push(maxHeap_min);
    maxHeap.push(minHeap_max);
  }

  answer.push(maxHeap.peek());
});

console.log(answer.join("\n"));
