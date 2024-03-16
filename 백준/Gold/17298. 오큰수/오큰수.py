n = int(input())
num_list = list(map(int, input().split()))
stack = []
result = [-1]*n
for i in range(n):
    while stack:
        if num_list[stack[-1]] < num_list[i]:
            index = stack.pop()
            result[index] = num_list[i]
        else:
            stack.append(i)
            break
    if not stack:
        stack.append(i)

print(*result)