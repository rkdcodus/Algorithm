n = int(input())
num_list = input().split()
stack = []
result = [-1]*n
for i in range(n):
    while stack:
        if int(stack[-1][0]) < int(num_list[i]):
            result[stack[-1][1]] = num_list[i]
            stack.pop()
        else:
            stack.append([num_list[i], i])
            break
    if not stack:
        stack.append([num_list[i], i])

print(*result)

