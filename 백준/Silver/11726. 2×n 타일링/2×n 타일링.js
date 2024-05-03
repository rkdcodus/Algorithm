const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const D = Array.from({ length: input + 1 }, () => 0);

D[1] = 1;

for (let i = 2; i < input + 1; i++) {
  if (i === 2) {
    D[i] = 2;
    continue;
  }
  D[i] = (D[i - 1] + D[i - 2]) % 10007;
}

console.log(D[input]);
