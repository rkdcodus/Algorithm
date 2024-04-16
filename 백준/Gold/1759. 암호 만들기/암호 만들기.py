import sys
input = sys.stdin.readline

def bfs(idx):
    global vowel, consonant

    if vowel > 0 and consonant > 1 and len(result) == l:
        print(''.join(result))
        return

    for i in range(idx,c):
        if result and result[-1] > c_list[i]:
            continue

        result.append(c_list[i])

        if c_list[i] in ['a', 'e', 'i', 'o', 'u']:
            vowel += 1
        else:
            consonant += 1

        bfs(i+1)

        result.pop()

        if c_list[i] in ['a', 'e', 'i', 'o', 'u']:
            vowel -= 1
        else:
            consonant -= 1

l, c = map(int, input().split())
c_list = sorted(input().split())

vowel = 0
consonant = 0
result = []

bfs(0)
