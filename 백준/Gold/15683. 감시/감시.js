const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, M] = input[0];
const office = input.slice(1);
const cctvs = [];
const directions = {
  1: [[[0, 1]], [[0, -1]], [[1, 0]], [[-1, 0]]],
  2: [
    [
      [0, 1],
      [0, -1],
    ],
    [
      [1, 0],
      [-1, 0],
    ],
  ],
  3: [
    [
      [0, 1],
      [-1, 0],
    ],
    [
      [0, 1],
      [1, 0],
    ],
    [
      [0, -1],
      [-1, 0],
    ],
    [
      [0, -1],
      [1, 0],
    ],
  ],
  4: [
    [
      [0, 1],
      [0, -1],
      [-1, 0],
    ],
    [
      [0, 1],
      [0, -1],
      [1, 0],
    ],
    [
      [1, 0],
      [-1, 0],
      [0, 1],
    ],
    [
      [1, 0],
      [-1, 0],
      [0, -1],
    ],
  ],
  5: [
    [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ],
  ],
};

// depth: 탐색 깊이, 몇 번째 cctv까지 탐색했는지 나타냄.
// office: 사무실 맵 상태
// count: #의 개수
const dfs = (depth, office, count) => {
  // cctv 뱡향 조합 중 하나 완성.
  if (depth === cctvs.length) {
    const blindSpot = N * M - count - cctvs.length - wallSpot;
    if (answer > blindSpot) {
      answer = blindSpot;
    }
    return;
  }

  // n번째 cctv의 위치와 타입을 추출.
  const { x, y, type } = cctvs[depth];

  // cctv 타입에 맞는 방향 세트묶음에서 세트를 하나씩 불러옴.
  // ex) 2타입의 [[0, 1],[0, -1]]는 2타임의 2 세트 중 첫번째 세트.
  // depth === cctvs.length에 의해  return 되면 두번째 세트 진행.
  for (let dirSet of directions[type]) {
    // 임시 사무실 생성. 깊은 복사
    let tempOffice = office.map((row) => row.slice());
    let tempCount = count;
    // 정해진 세트의 방향대로 # 달기.
    // 인덱스가 사무실 크기에 벗어나거나 6 벽과 만나면 break
    for (const [dx, dy] of dirSet) {
      let nx = x;
      let ny = y;
      while (true) {
        nx += dx;
        ny += dy;
        if (nx < 0 || nx >= N || ny < 0 || ny >= M || tempOffice[nx][ny] === 6) break;
        if (tempOffice[nx][ny] === 0) {
          tempOffice[nx][ny] = "#";
          tempCount += 1;
        }
      }
    }

    // 다른 cctv의 #도 탐색하러가기.
    dfs(depth + 1, tempOffice, tempCount);
  }
};

// cctvs 배열 채우기: cctv의 위치, 종류 저장.
let wallSpot = 0;
let answer = N * M;

// cctv 찾기, 벽 갯수 세기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (0 < office[i][j] && office[i][j] <= 5) {
      cctvs.push({ x: i, y: j, type: office[i][j] });
    }
    if (office[i][j] === 6) wallSpot += 1;
  }
}

dfs(0, office, 0);

console.log(answer);
