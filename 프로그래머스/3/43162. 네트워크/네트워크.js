// 연결되어있는 노드 개수 구하기 => bfs
// [i][j] === 1 일 때 i와 j는 연결되어있다 그러면 [j][i]도 1이란 소리. 
// bfs를 돌려서 연결되어있는 노드는 0으로. 

// 1 0 0 1
// 0 1 1 0
// 0 1 1 0
// 1 0 0 1



function solution(n, computers) {
    var answer = 0;
    const visited = Array.from({length: n}, () => 0);
    
    function bfs(a) {
        const queue = [a];
        
        while(queue.length) {
            const x = queue.shift();
            console.log('queue', x)
            visited[x] = 1;
            
            for(let j=0; j<n; j++) {
                if(visited[j]) continue;
                if(computers[x][j] === 0) continue;
                visited[j] = 1;
                queue.push(j);
            }
        }
    }
    
   for(let i=0; i<n; i++) {
       if(visited[i] === 0) {
           bfs(i)
           answer += 1
       }
   }
    
    return answer;
}