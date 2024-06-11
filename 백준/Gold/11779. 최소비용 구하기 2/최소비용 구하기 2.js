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

const n = input[0][0];
const graph = Array.from({ length: n + 1 }, () => []);

input.slice(2, -1).forEach((i) => {
  const [start, end, cost] = i;
  graph[start].push([end, cost]);
});
const [start, end] = input.slice(-1)[0];

const dijkstra = (start, end) => {
  const minHeap = new MinHeap();
  const costs = Array(n + 1).fill(Infinity);
  const routes = Array(n + 1).fill(null);
  minHeap.push([0, start]);
  costs[start] = 0;

  while (!minHeap.isEmpty()) {
    const [totalcost, node] = minHeap.pop();

    if (costs[node] < totalcost) continue;

    for (let [next, cost] of graph[node]) {
      const newCost = totalcost + cost;

      if (costs[next] > newCost) {
        routes[next] = node;
        costs[next] = newCost;
        minHeap.push([newCost, next]);
      }
    }
  }

  return { cost: costs[end], route: routes };
};

const { cost, route } = dijkstra(start, end);

const answerRoute = [];
let node = end;
while (node !== null) {
  answerRoute.push(node);
  node = route[node];
}
answerRoute.reverse();

console.log(cost);
console.log(answerRoute.length);
console.log(answerRoute.join(" "));
