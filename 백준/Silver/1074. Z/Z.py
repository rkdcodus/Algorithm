import sys
input = sys.stdin.readline
N, R, C = map(int, input().split())
count = 0
def recursion(r, c, n):
    global count
    if r == R and c == C:
        print(count)
        exit(0)
    if n == 1:
        count += 1
        return
    if not (r<=R<r+n and c<=C<c+n):
        count += n*n
        return
    n = n // 2
    recursion(r, c, n)
    recursion(r, c+n, n)
    recursion(r+n, c, n)
    recursion(r+n, c+n, n)

recursion(0, 0, 2**N)