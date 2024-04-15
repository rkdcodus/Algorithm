def backtracking():
    if len(result) == m:
        print(*result)
        return
    prev = 0
    for i in range(0, n):
        if result and result[-1] > value[i]:
            continue
        if value[i] == prev:
            continue
        s[i] = 1
        prev = value[i]
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