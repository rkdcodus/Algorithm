const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n, w, L] = input[0];
const trucks = input[1];
const crossingTrucks = [];
// 처음에 다리 길이만큼 0을 넣음. 트럭은 오른쪽에서 오기 때문.
const bridgeQueue = Array(w).fill(0);
let bridgeWeight = 0;
let time = 0;

while (bridgeQueue.length > 0) {
  time += 1;

  // 빠져나가야할 트럭 or 빈 공간이 빠져나감.
  // while 순회 시 무조건 하나는 빠지며 아래 로직에서 하나가 무조건 추가됨.
  // 다리 길이는 일정함. 고려안해도 괜찮음.
  bridgeWeight -= bridgeQueue.shift();

  // 다음 트럭이 있는지 확인
  // 다음 트럭이 올라가도 되는지 확인 : 최대 하중 고려
  if (trucks.length > 0) {
    if (bridgeWeight + trucks[0] <= L) {
      const truck = trucks.shift();
      bridgeQueue.push(truck);
      bridgeWeight += truck;
    } else {
      // 최대 하중 초과 시 트럭 진입 X
      bridgeQueue.push(0);
    }
  }
}

console.log(time);
