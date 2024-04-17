from collections import deque


def check():
    q = deque()
    q.append(answer[0])
    visited = [[-1 for _ in range(5)] for _ in range(5)]
    for i in answer:
        visited[i[0]][i[1]] = 0
    visited[answer[0][0]][answer[0][1]] = 1
    cnt = 1
    while q:
        r, c = q.popleft()
        for d in range(4):
            nr = r + dx[d]
            nc = c + dy[d]
            if 0 <= nr < 5 and 0 <= nc < 5 and visited[nr][nc] == 0:
                cnt += 1
                visited[nr][nc] = 1
                q.append([nr, nc])
    if cnt == 7:
        return True
    else:
        return False


def solution(depth, idx, count):
    global result
    if count >= 4:
        return
    if depth == 7:
        if check():
            result += 1
        return
    for i in range(idx, 25):
        r = i // 5
        c = i % 5
        answer.append([r, c])
        solution(depth + 1, i + 1, count + (graph[r][c] == 'Y'))
        answer.pop()


graph = [list(input()) for _ in range(5)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
answer = []
result = 0
solution(0, 0, 0)
print(result)