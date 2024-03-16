import sys
input = sys.stdin.readline

n = int(input())
num_list = input().split()
stack = []
result = [0]*n
for i in range(n):
    # 스택이 비었으면 자신을 넣는다.
    # i가 stack에 들어왔을 때, stack에 들어있는 값과 비교
    # stack[top] 보다 i가 작다면 stack에 넣는다.
    # stack[top]보다 i가 크다면 stack[top]의 오큰수는 i가 된다.
    # -> stack[top]의 오큰수가 정해졌으니 pop
    # -> 그다음 stack[top] 과 또 비교하여 작다면 push, 크다면 pop
    # -> 빈 stack이 될 경우, push
    # stack에 남아있는 애들은 오큰수가 없으므로 -1이다.
    # stack에 저장 시 인덱스와 같이 저장한다. [num, index]
    while stack:
        if int(stack[-1][0]) < int(num_list[i]):
            result[stack[-1][1]] = num_list[i]
            stack.pop()
        else:
            stack.append([num_list[i], i])
            break
    if not stack:
        stack.append([num_list[i], i])
for i in stack:
    result[i[1]] = -1
print(*result)

