def backtracking():
    if len(result) == m:
        print(*result)
        return
    for i in range(0, n):
        if s[i]:
            continue
        if result and result[-1] > value[i]:
            continue
        s[i] = 1
        result.append(value[i])
        backtracking()
        result.pop()
        s[i] = 0

n, m = map(int, input().split())
value = list(map(int, input().split()))
s = [0] * n
value.sort()
result = []
backtracking()