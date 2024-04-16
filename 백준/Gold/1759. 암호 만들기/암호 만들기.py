import sys
input = sys.stdin.readline

def bfs():
    global vowel_count, consonant

    if vowel_count > 0 and consonant > 1 and len(result) == l:
        print(''.join(result))
        return

    for i in range(c):
        if v[i]:
            continue
        if result and result[-1] > c_list[i]:
            continue

        v[i] = 1
        result.append(c_list[i])

        if c_list[i] in vowel:
            vowel_count += 1
        else:
            consonant += 1

        bfs()

        v[i] = 0
        result.pop()

        if c_list[i] in vowel:
            vowel_count -= 1
        else:
            consonant -= 1

l, c = map(int, input().split())
c_list = input().split()

c_list.sort()
v = [0] * c
vowel = ['a', 'e', 'i', 'o', 'u']
vowel_count = 0
consonant = 0
result = []

bfs()
