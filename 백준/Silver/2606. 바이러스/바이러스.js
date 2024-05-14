const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const v = input[0][0];
const G = Array.from({ length: v + 1 }, () => []);
const Visited = Array.from({ length: v + 1 }, () => 0);

// 그래프 생성하기
input.slice(2).map((e) => {
  G[e[0]].push(e[1]);
  G[e[1]].push(e[0]);
});

const bfs = (i) => {
  const D = [i];
  while (D.length) {
    const d = D.shift();
    Visited[d] = 1;
    G[d].forEach((v) => {
      if (!Visited[v]) {
        D.push(v);
      }
    });
  }
};

bfs(1);

const answer = Visited.reduce((sum, cur) => {
  if (cur) return sum + cur;
  return sum;
}, -1);

console.log(answer);
