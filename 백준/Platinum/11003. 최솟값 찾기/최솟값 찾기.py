from collections import deque
import sys
input = sys.stdin.readline

N, L = map(int, input().split())
D = list(map(int, input().split()))
D_deque = deque()

for i in range(N):
    if D_deque and D_deque[0][1] < i - L + 1:
        D_deque.popleft()

    while D_deque and D_deque[-1][0] > D[i]:
        D_deque.pop()

    D_deque.append((D[i], i))
    print(D_deque[0][0], end=' ')