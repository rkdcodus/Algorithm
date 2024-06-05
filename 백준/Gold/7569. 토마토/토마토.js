class Deque {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  shift() {
    if (this.tail === this.head) {
      return undefined;
    }
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  length() {
    return this.tail - this.head;
  }
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [m, n, h] = input[0];
const directions = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];
const tomatos = [];

for (let i = 1; i < input.length - 1; i++) {
  tomatos.push(input.slice(i, n + i));
  i += n - 1;
}

let noTomato = 0;
let noFullTomato = 0;
const fullTomato = [];

for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (tomatos[i][j][k] === 1) fullTomato.push([i, j, k, 0]);
      else if (tomatos[i][j][k] === 0) noFullTomato += 1;
      else if (tomatos[i][j][k] === -1) noTomato += 1;
    }
  }
}

if (!noFullTomato) return console.log(0);

const bfs = (q) => {
  const queue = new Deque();
  let days = 0;
  let toFullTomato = 0;

  for (let item of q) {
    queue.push(item);
  }

  while (queue.length() > 0) {
    const [z, y, x, day] = queue.shift();
    days = day;
    toFullTomato += 1;

    for (const [dz, dy, dx] of directions) {
      const nz = z + dz;
      const ny = y + dy;
      const nx = x + dx;

      if (nz < 0 || nz >= h || ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
      if (tomatos[nz][ny][nx] === 0) {
        tomatos[nz][ny][nx] = 1;
        queue.push([nz, ny, nx, day + 1]);
      }
    }
  }
  if (toFullTomato + noTomato < m * n * h) return -1;
  return days;
};

const days = bfs(fullTomato);
console.log(days);
