const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 가장 작은 두 카드를 계속 합치는 것이 가장 최적의 해결 방법.
// minHeap을 구성해서 카드를 일단 모두 합쳐 heap을 생성한다.
// 가장 작은 카드 2개를 뽑고 합친 값을 다시 heap에 추가.
// 합친 값은 totalCost에도 추가.
// 우선순위 큐에 카드 묶임이 하나만 남을때까지 반복.  => 하나가 남았다는 뜻이 카드 묶음들이 다 뭉쳐 하나가 되었다는 뜻.
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftIdx(idx) {
    return 2 * idx + 1;
  }

  getRightIdx(idx) {
    return 2 * idx + 2;
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

      if (this.heap[parentIdx] > this.heap[idx]) {
        this.swap(parentIdx, idx);
        idx = parentIdx;
      } else {
        break;
      }
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
    while (this.getLeftIdx(idx) < this.heap.length) {
      let smallerChildIdx = this.getLeftIdx(idx);
      let rightChildIdx = this.getRightIdx(idx);

      if (
        rightChildIdx < this.heap.length &&
        this.heap[rightChildIdx] < this.heap[smallerChildIdx]
      ) {
        smallerChildIdx = rightChildIdx;
      }

      if (this.heap[idx] <= this.heap[smallerChildIdx]) break;
      this.swap(idx, smallerChildIdx);
      idx = smallerChildIdx;
    }
  }

  size() {
    return this.heap.length;
  }
}

const minHeap = new MinHeap();

input.slice(1).forEach((e) => {
  minHeap.push(e);
});

let totalCost = 0;

while (minHeap.size() > 1) {
  const card1 = minHeap.pop();
  const card2 = minHeap.pop();
  const newCard = card1 + card2;
  totalCost += newCard;
  minHeap.push(newCard);
}

console.log(totalCost);
