from collections import deque
import sys
input = sys.stdin.readline
T = int(input())
dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def bfs(x, y):
    q = deque([(x, y)])
    field[x][y] = 0
    while q:
        x, y = q.popleft()
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if nx < 0 or nx >= M or ny < 0 or ny >= N:
                continue
            if field[nx][ny] == 1:
                q.append((nx, ny))
                field[nx][ny] = 0

    return


for _ in range(T):
    M, N, K = map(int, input().split())
    field = [[0 for _ in range(N)] for _ in range(M)]
    count = 0

    for i in range(K):
        x, y = map(int, input().split())
        field[x][y] = 1

    for i in range(M):
        for j in range(N):
            if field[i][j] == 1:
                bfs(i, j)
                count += 1
    print(count)
