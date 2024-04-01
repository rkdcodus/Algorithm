import sys
input = sys.stdin.readline

A, B, C = map(int, input().split())

def recursion(a, b, c):
    if b == 1:
        return a % c
    if b % 2 == 0:
        return (recursion(a, b//2, c) ** 2)%c
    else:
        return ((recursion(a, b//2, c) ** 2)*a)%c

result = recursion(A, B, C)
print(result)