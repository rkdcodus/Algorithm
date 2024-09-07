// 음수가 리턴된다면 a < b를 의미하고,
// 양수가 리턴된다면 a > b를 의미하고,
// 0이 리턴된다면 a == b를 의미한다.

function solution(strings, n) {
  // strings.sort((a, b) => {
  //   if (a[n] > b[n]) return 1;
  //   if (a[n] < b[n]) return -1;
  //   return a < b ? -1 : a > b ? 1 : 0;
  // });
    strings.sort((a, b) => {
        if(a[n] === b[n]) return a.localeCompare(b);
        return a[n].localeCompare(b[n]);
    })
  return strings;
}