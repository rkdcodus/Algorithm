import sys
input = sys.stdin.readline
count = int(input())
stack = []
result = 0
for i in range(count):
    building = int(input())

    while stack:
        if building >= stack[-1]:
            stack.pop()
        else:
            result += len(stack)
            stack.append(building)
            break
    if not stack:
        stack.append(building)

print(result)