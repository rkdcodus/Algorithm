import sys
input = sys.stdin.readline

def cut_paper(list, x, y, n):
    last_paper = list[x][y]
    
    if n == 1:
        result[list[x][y]] += 1
        return
    
    for i in range(n):
        for j in range(n):
            if list[x+i][y+j] != last_paper:
                n = n//2
                cut_paper(list, x, y, n)
                cut_paper(list, x, y + n, n)
                cut_paper(list, x+n, y, n)
                cut_paper(list, x+n, y+n, n)
                return
            
    result[list[x][y]] += 1

N = int(input())
paper = [list(map(int, input().split())) for _ in range(N)]
result = {0: 0, 1: 0}
cut_paper(paper, 0, 0, N)

print(result[0])
print(result[1])