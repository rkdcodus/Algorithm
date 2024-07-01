/* 
0~9까지의 배열을 선언 -> 숫자 개수 count
max를 찾는다. 
6과 9는 개수 합쳐서 / 2 한 값. 
*/

const solution = (input) => {
  const arr = Array(10).fill(0);
  const input_arr = input.split("").map(Number);
  let sixNine = 0;
  let max = 0;

  input_arr.forEach((num) => {
    arr[num] += 1;
  });
  arr.forEach((num, index) => {
    if (index === 6) sixNine += num;
    else if (index === 9) sixNine += num;
    else {
      max = Math.max(max, num);
    }
  });

  sixNine = Math.ceil(sixNine / 2); // 소수점 올림
  return Math.max(sixNine, max);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = line; // 입력받은 문자열 lines
  rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
