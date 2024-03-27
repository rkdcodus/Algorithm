from collections import deque
import sys
input = sys.stdin.readline

M, N = map(int, input().split()) # M 가로, N 세로
tomato_box = []
for _ in range(N):
    tomato_box.append(list(map(int, input().split())))

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]
def bfs(list):
    q = deque(list)
    exist_zero_tomato = False
    while q:
        x, y = q.popleft()
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                continue
            if tomato_box[nx][ny] == 0:
                exist_zero_tomato = True
                q.append((nx, ny))
                tomato_box[nx][ny] = tomato_box[x][y] + 1
    return exist_zero_tomato

one_tomato = []
for i in range(N):
    for j in range(M):
        if tomato_box[i][j] == 1:
            one_tomato.append((i, j))

bfs_result = bfs(one_tomato)
result = 0
min_data = 0
if bfs_result == True:
    for i in range(N):
        for j in range(M):
            if tomato_box[i][j] == 0:
                result = -1
                break
            if tomato_box[i][j] > min_data:
                min_data = tomato_box[i][j]
                
if len(one_tomato) == 0:
    result = -1
    
if result == -1:
    print(-1)
elif bfs_result == False:
    print(0)
else:
    print(min_data-1)