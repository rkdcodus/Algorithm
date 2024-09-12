function solution(n, stations, w) {
    const newStations = [];
    let first = 0;
    let answer = 0;
    
    for(let i=0;i<stations.length;i++) {
        const last = stations[i] - w - 1;
        answer += Math.ceil((last-first) / (w * 2 + 1));
        first = stations[i] + w;
    }
  
    if (first <= n) answer += Math.ceil((n - first) / (w * 2 + 1));
  
    return answer;
  }