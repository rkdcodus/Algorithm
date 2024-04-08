def backtracking():
    if len(result) == m:
        print(*result)
        return
    for i in range(1, n+1): 
        if visited[i]:
            continue
        visited[i] = 1
        result.append(i)
        backtracking()
        result.pop()
        visited[i] = 0

n, m = map(int, input().split())

result = []
visited = [0] * (n+1)
backtracking()