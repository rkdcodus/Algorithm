import sys
input = sys.stdin.readline

def same_paper(list, x, y, n):
    last_paper = list[x][y]
    if n == 1:
        result[list[x][y]] += 1
        return
    different = 0
    for j in range(x-(n-1), x+1):
        for k in range(y-(n-1), y+1):
            if list[j][k] != last_paper:
                different += 1
    if different > 0:
        for j in range(0, n, n // 3):
            for k in range(0, n, n // 3):
                same_paper(list, x - j, y - k, n//3)
    else:
        result[last_paper] += 1


result = {-1: 0, 0:0, 1:0}
paper = []

n = int(input())
for i in range(n):
    paper.append(list(map(int, input().split())))

same_paper(paper, n-1, n-1, n)
print(result[-1])
print(result[0])
print(result[1])