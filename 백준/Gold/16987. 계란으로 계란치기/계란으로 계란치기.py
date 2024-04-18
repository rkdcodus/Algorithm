n = int(input())
egg = []
vistied = []
result = 0

for _ in range(n):
    egg.append(list(map(int, input().split())))

def break_egg(pick):
    global result
    # pick이 egg의 가장 오른쪽 egg일때 종료
    if pick == n:
        count = 0
        for i in range(n):
            if egg[i][0] <= 0:
                count += 1
        result = max(result, count)
        return

    #pick이 이미 깨진 계란이라면? 다음 계란으로
    if egg[pick][0] <= 0:
        break_egg(pick + 1)
        return

    # 들고있는 계란 빼고 다 깨졌을 경우, 바로 return
    check = True
    for i in range(n):
        if i == pick:
            continue
        if egg[i][0] > 0:
            check = False
            break

    if check:
        result = max(result, n-1)
        # print(egg)
        return

    # 백트래킹
    for j in range(n):
        # 들고있는 계란이 아니면서 오른쪽 계란들 중 내구도가 0 이하라면 다른 계란 찾기
        if pick == j:
            continue
        if egg[j][0] <= 0:
            continue

        # 들고 있는 계란으로 다른 계란 치기.
        egg[pick][0] -= egg[j][1]
        egg[j][0] -= egg[pick][1]
        break_egg(pick + 1)
        egg[pick][0] += egg[j][1]
        egg[j][0] += egg[pick][1]

break_egg(0)
print(result)