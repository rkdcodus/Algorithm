def backtracking():
    if len(result) == m:
        print(*result)
        return
    
    for i in range(0, n):
        if result and result[-1] > value[i]:
            continue

        result.append(value[i])
        backtracking()
        result.pop()


n, m = map(int, input().split())
value = list(map(int, input().split()))
value.sort()
result = []
backtracking()