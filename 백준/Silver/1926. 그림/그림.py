from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().split())

canvas = []
count = 0
max_width = 0

for _ in range(n):
    canvas.append(input().split())

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def bfs(a, b):
    q = deque([(a, b)]) 
    paint_width = 1
    canvas[a][b] = '0'
    while q:    
        x, y = q.popleft() 
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if nx < 0 or nx >= n or ny < 0 or ny >= m: 
                continue
            if canvas[nx][ny] == '1':
                canvas[nx][ny] = '0'  
                paint_width += 1 
                q.append((nx, ny)) 
    return paint_width

for i in range(n):
    for j in range(m):
        if canvas[i][j] == '1':  
            count += 1  
            result = bfs(i, j)  
            if max_width < result:
                max_width = result

print(count) 
print(max_width) 