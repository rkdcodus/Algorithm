import sys
input = sys.stdin.readline
n = int(input())

D = [0] * (n+1)
P = [0] * (n+1)

for i in range(2, n+1):
    D[i] = D[i-1] + 1
    P[i] = i - 1
    if i % 2 == 0:
        if D[i] > D[i // 2] + 1:
            D[i] = D[i // 2] + 1
            P[i] = i // 2
    if i % 3 == 0:
        if D[i] > D[i // 3] + 1:
            D[i] = D[i // 3] + 1
            P[i] = i // 3

print(D[n])
idx = n
while True:
    print(idx, end=' ')
    if idx == 1:
        break
    idx = P[idx]