const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

const bfs = (N, K) => {
  const max_position = 100000;
  const visited = Array.from({ length: max_position + 1 }, () => false);
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length > 0) {
    const [position, time] = queue.shift();

    if (position === K) return time;

    nexts = [position - 1, position + 1, position * 2];
    nexts.forEach((next) => {
      if (next >= 0 && next <= max_position && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    });
  }

  return -1;
};

console.log(bfs(N, K));
