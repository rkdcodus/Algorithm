function solution(n, stations, w) {
  const newStations = [];
  let first = 0;
  let answer = 0;
  let index = 0;
    
  while(index < stations.length) {
      const last = stations[index] - w - 1;
      answer += Math.ceil((last-first) / (w * 2 + 1));
      first = stations[index] + w;
      index += 1;
  }

  if (first <= n) answer += Math.ceil((n - first) / (w * 2 + 1));

  return answer;
}
