const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [V, E] = input[0];
const [K] = input[1];
const graph = Array.from({ length: V + 1 }, () => []);
for (let i = 2; i < input.length; i++) {
  const [u, v, w] = input[i];
  graph[u].push([v, w]);
}

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

const dijkstra = (start) => {
  const pq = new MinHeap();
  const distances = Array(V + 1).fill(Infinity);
  pq.push([0, start]); // [거리 , 노드]
  distances[start] = 0;

  while (!pq.isEmpty()) {
    const [dist, cur] = pq.pop();

    if (dist > distances[cur]) continue;

    for (const [neighbor, weight] of graph[cur]) {
      const cost = dist + weight;
      if (cost < distances[neighbor]) {
        distances[neighbor] = cost;
        pq.push([cost, neighbor]);
      }
    }
  }
  return distances;
};

const result = dijkstra(K);

for (let i = 1; i <= V; i++) {
  if (result[i] === Infinity) {
    console.log("INF");
  } else {
    console.log(result[i]);
  }
}
