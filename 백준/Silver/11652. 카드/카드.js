const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => BigInt(v));

const [n, ...cardNumber] = input;

const card_map = new Map();

cardNumber.forEach((value) => {
  if (card_map.has(value)) {
    card_map.set(value, card_map.get(value) + 1);
  } else card_map.set(value, 1);
});

let max = 0;
let answer = [];

for (const [key, value] of card_map) {
  if (value > max) {
    max = value;
    answer = key;
  } else if (value === max) {
    if (key < answer) answer = key;
  }
}

console.log(answer.toString());
