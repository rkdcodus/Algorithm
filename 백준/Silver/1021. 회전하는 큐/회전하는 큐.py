from collections import deque
import sys
input = sys.stdin.readline

n, m = input().split()
index_list = input().split()
result = 0
list = deque([0] * int(n))
for i in range(int(m)):
    list[int(index_list[i])-1] = int(index_list[i])

for i in index_list:
    if list.index(int(i)) < len(list)/2:
        result += list.index(int(i))
        list.rotate(-list.index(int(i)))
        list.popleft()
    else:
        result += len(list) - list.index(int(i))
        list.rotate(len(list)-list.index(int(i)))
        list.popleft()

print(result)
