const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(line => line.split(" ").map(Number));

const n = input[0][0];
const cities = input.slice(1);
const visited = new Array(n).fill(false);
let answer = Infinity;

const dfs = (currentCity, depth, cost) => {
  if (depth === n) { // 모든 도시를 방문했으면 시작 도시로 돌아가야 함
    if (cities[currentCity][0] !== 0) { // 시작 도시로 돌아갈 경로가 있는지 확인
      answer = Math.min(answer, cost + cities[currentCity][0]);
    }
    return;
  }

  for (let nextCity = 0; nextCity < n; nextCity++) {
    if (!visited[nextCity] && cities[currentCity][nextCity] !== 0) {
      if (cost + cities[currentCity][nextCity] < answer) { // 가지치기
        visited[nextCity] = true;
        dfs(nextCity, depth + 1, cost + cities[currentCity][nextCity]);
        visited[nextCity] = false;
      }
    }
  }
};

visited[0] = true; // 첫 번째 도시 방문 시작
dfs(0, 1, 0); // 시작 도시, 방문 도시 수, 현재까지의 비용
console.log(answer);
