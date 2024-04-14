def back(index, sum_value):
    global count
    if index >= n:
        return

    sum_value += n_list[index]

    if sum_value == s:
        count += 1

    back(index + 1, sum_value)
    back(index + 1, sum_value - n_list[index])


n, s = map(int, input().split())
n_list = list(map(int, input().split()))

count = 0
back(0, 0)
print(count)