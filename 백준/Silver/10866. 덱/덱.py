from collections import deque
import sys
input = sys.stdin.readline
n = int(input())
list = deque()
for _ in range(n):
    command = input().split()
    if command[0] == 'push_front':
        list.appendleft(command[1])
    elif command[0] == 'push_back':
        list.append(command[1])
    elif command[0] == 'size':
        print(len(list))
    elif command[0] == 'empty':
        if len(list) == 0:
            print(1)
        else:
            print(0)
    elif len(list) == 0:
        print(-1)
    elif command[0] == 'pop_front':
        print(list.popleft())
    elif command[0] == 'pop_back':
        print(list.pop())
    elif command[0] == 'front':
        print(list[0])
    elif command[0] == 'back':
        print(list[-1])