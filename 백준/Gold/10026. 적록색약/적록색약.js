const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const visited_normal = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
const visited_blindness = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
const grid_normal = input.slice(1).map((e) => {
  const arr = [...e.trim()];
  return arr;
});
const grid_blindness = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
const answer = [0, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (grid_normal[i][j] === "R" || grid_normal[i][j] === "G") {
      grid_blindness[i][j] = "R";
    } else {
      grid_blindness[i][j] = grid_normal[i][j];
    }
  }
}

const bfs = (x, y, visited, grid) => {
  const q = [[x, y]];
  const color = grid[x][y];

  while (q.length > 0) {
    const [x, y] = q.shift();
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    visited[x][y] = 1;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

      if (!visited[nx][ny] && grid[nx][ny] === color) {
        q.push([nx, ny]);
        visited[nx][ny] = 1;
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited_normal[i][j]) {
      bfs(i, j, visited_normal, grid_normal);
      answer[0] += 1;
    }
    if (!visited_blindness[i][j]) {
      bfs(i, j, visited_blindness, grid_blindness);
      answer[1] += 1;
    }
  }
}

console.log(answer.join(" "));
