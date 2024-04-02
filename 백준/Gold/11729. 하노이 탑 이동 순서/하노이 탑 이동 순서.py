def hanoi(start, arrive, n):
    if n == 1:
        print(start, arrive)
        return
    hanoi(start, 6-start-arrive, n-1)
    print(start, arrive)
    hanoi(6-start-arrive, arrive, n-1)

N = int(input())
print(2**N-1)
hanoi(1, 3, N)