const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 부모노드 인덱스
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  // 왼쪽 자식 노드 인덱스
  getLeftChildIdx(idx) {
    return 2 * idx + 1;
  }

  // 오른쪽 자식 노드 인덱스
  getRightChildIdx(idx) {
    return 2 * idx + 2;
  }

  // 노드 교환
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  // node1 > node2 이면 양수, 아니면 음수
  compare(node1, node2) {
    if (node1.value !== node2.value) {
      return node1.value - node2.value;
    }
    // 같을 때 sign 비교해도 node1 > node2 이면 양수
    return node1.sign - node2.sign;
  }

  // 값 추가 후 heap 다시 정렬
  push(value) {
    const sign = value < 0 ? 0 : 1;
    this.heap.push({ value: Math.abs(value), sign });
    this.heapifyUp();
  }

  // 힙 정렬
  heapifyUp() {
    let idx = this.heap.length - 1; // 마지막 노드부터 시작
    while (idx > 0) {
      const parentIdx = this.getParentIdx(idx);

      // 부모노드값이 현재 노드 값보다 더 크다면 노드 교환
      if (this.compare(this.heap[parentIdx], this.heap[idx]) > 0) {
        this.swap(parentIdx, idx);
        idx = parentIdx; // 현 인덱스를 부모 인덱스 값으로 갱신
      } else {
        break;
      }
    }
  }

  pop() {
    if (this.heap.length === 0) {
      return 0;
    }

    if (this.heap.length === 1) {
      const { value, sign } = this.heap.pop();
      return sign === 0 ? -value : value;
    }
    const root = this.heap[0]; // 최상위 노드 값 root에 저장
    this.heap[0] = this.heap.pop(); // 가장 하위 노드 값 root로 옮김.
    this.heapifyDown(); // root 노드 값 다시 원위치로 정렬
    return root.sign === 0 ? -root.value : root.value;
  }

  heapifyDown() {
    // 목표: root를 제자리에 돌려놓기 자식보다 크다면 아래로 내려가기.
    let idx = 0;

    // 왼쪽 자식 노드가 heap 전체 길이보다 클때까지 while문 수행
    while (this.getLeftChildIdx(idx) < this.heap.length) {
      let smallerChildIdx = this.getLeftChildIdx(idx);
      const rightChildIdx = this.getRightChildIdx(idx);

      // 아직 오른쪽 자식 노드가 존재하며
      // 자식노드 값 중에서 더 작은 값을 가진 인덱스 찾기.
      if (
        rightChildIdx < this.heap.length &&
        this.compare(this.heap[rightChildIdx], this.heap[smallerChildIdx]) < 0
      ) {
        smallerChildIdx = rightChildIdx;
      }

      // 현 인덱스 노드 값이 앞서 찾은 더 작은 값보다 크다면 자식 노드로 이동.
      if (this.compare(this.heap[idx], this.heap[smallerChildIdx]) <= 0) {
        break;
      }
      this.swap(idx, smallerChildIdx);
      idx = smallerChildIdx; //
    }
  }
}

const pq = new MinHeap();
const answer = [];
input.slice(1).forEach((e) => {
  if (e) {
    pq.push(e);
  } else {
    answer.push(pq.pop());
  }
});

console.log(answer.join("\n"));
