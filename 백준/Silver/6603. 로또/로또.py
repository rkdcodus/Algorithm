import sys
input = sys.stdin.readline

def bfs(t):
    
    if len(r) == 6:
        print(*r)
        return
    
    for i in range(1, t[0]+1):
        if v[i]:
            continue
            
        if r and r[-1] > t[i]:
            continue
            
        v[i] = 1
        r.append(t[i])
        bfs(t)
        v[i] = 0
        r.pop()

t_list = []

while True:
    t = list(map(int, input().split()))
    
    if t[0] == 0:
        break
        
    t_list.append(t)

for t in t_list:
    v = [0] * (t[0] + 1)
    r = []
    bfs(t)
    print()