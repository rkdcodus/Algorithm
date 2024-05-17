const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const N = input[0][0];
const G = input.slice(1);

const answer = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));

const dfs = (n, index, Visited) => {
  for (let i = 0; i < N; i++) {
    if (G[n][i] && !Visited[i]) {
      Visited[i] = 1;
      answer[index][i] = 1;
      dfs(i, index, Visited);
    }
  }
};

for (let i = 0; i < N; i++) {
  const Visited = Array.from({ length: N }, () => 0);
  dfs(i, i, Visited);
}

answer.map((k) => {
  console.log(k.join(" "));
});
