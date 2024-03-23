import sys
from collections import deque
input = sys.stdin.readline
T = int(input())

for _ in range(T):
    result = ''
    p = input()
    n = input()
    deque_list = deque(input().strip()[1:-1].split(','))
    reverse_count = 0

    for i in p:
        if i == 'R':
            reverse_count += 1
        elif i == 'D':
            if len(deque_list) == 0 or deque_list[0] == '':
                result = 'error'
                break
            if reverse_count % 2 == 0:
                deque_list.popleft()
            elif reverse_count % 2 != 0:
                deque_list.pop()

    if result != 'error' and reverse_count % 2 != 0:
        deque_list.reverse()
        result = '[' + ",".join(deque_list) + ']'
    elif result != 'error' and reverse_count % 2 == 0:
        result = '[' + ",".join(deque_list) + ']'

    print(result)