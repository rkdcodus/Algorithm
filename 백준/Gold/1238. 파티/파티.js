class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element[0] >= parent[0]) break;

      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild[0] < element[0]) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild[0] < element[0]) ||
          (swap !== null && rightChild[0] < leftChild[0])
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = element;
  }

  isEmpty() {
    return this.heap.length === 0;
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

const [N, M, X] = input[0];
const graph = Array.from({ length: N + 1 }, () => []);

input.slice(1).forEach((i) => {
  const [start, end, time] = i;
  graph[start].push([end, time]);
});

const dijkstra = (start, end) => {
  const minHeap = new MinHeap();
  const times = Array(N + 1).fill(Infinity);
  minHeap.push([0, start]);
  times[start] = 0;

  while (!minHeap.isEmpty()) {
    const [totaltime, cur] = minHeap.pop();

    if (times[cur] < totaltime) continue;

    for (let [next, time] of graph[cur]) {
      const newTime = totaltime + time;
      if (times[next] > newTime) {
        minHeap.push([newTime, next]);
        times[next] = newTime;
      }
    }
  }
  return times[end];
};

let answer = 0;
for (let i = 1; i <= N; i++) {
  // 1: 각자의 위치에서 X까지 가는데 걸리는 시간 구하기
  // 2: X에서 출발하여 각 마을로 가는데 걸리는 시간 구하기
  const time = dijkstra(i, X) + dijkstra(X, i);
  if (answer < time) answer = time;
}
console.log(answer);
