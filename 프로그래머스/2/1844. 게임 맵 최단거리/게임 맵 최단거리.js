// 최단거리 -> bfs, 도착할 수 없을 땐 -1
// 상대방 위치는 (n, m) 고정
// 시간 복잡도 2차원 배열 10,000칸짜리
function solution(maps) {
    var answer = 0;
    const N = maps.length;
    const M = maps[0].length;    
    const visited = Array.from({ length: N }, () => Array.from({length : M}, () => 0))
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    
    function bfs(a, b) {
        const queue = [[a, b, 1]];

        while(queue.length) {
            const [x, y, count] = queue.shift();
            if(x === N - 1 && y === M - 1) return count;
            
            visited[x][y] = 1;
            
            for(const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;
                
                if(nx < 0 || nx > N - 1 || ny < 0 || ny > M - 1 || maps[nx][ny] === 0) continue;
                if(visited[nx][ny]) continue;
                visited[nx][ny] = 1;
                
                queue.push([nx, ny, count + 1]);
            }
        } 
        
        return -1;
    
    }
    
    answer = bfs(0, 0)
    
    return answer;
}