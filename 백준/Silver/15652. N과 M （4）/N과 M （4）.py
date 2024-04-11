def backtracking():
    if len(result) == m:
        print(*result)
        return
    for i in range(1, n+1):
        if result and result[-1] > i:
            continue
        result.append(i)
        backtracking()
        result.pop()

n, m = map(int, input().split())

result = []
backtracking()