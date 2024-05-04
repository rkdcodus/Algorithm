import sys
input = sys.stdin.readline
n, m = map(int, input().split())
N = list(map(int, input().split()))

D = [0] * (n+1)
for i in range(1, n+1):
    D[i] = D[i-1] + N[i-1]

for _ in range(m):
    i, j = map(int, input().split())
    print(D[j]-D[i-1])