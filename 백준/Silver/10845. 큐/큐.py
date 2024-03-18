import sys
input = sys.stdin.readline
n = int(input())

class queue:
    def __init__(self):
        self.queue = []

    def size(self):
        return len(self.queue)

    def empty(self):
        if not self.queue:
            return 1
        return 0

    def push(self, x):
        self.queue.append(x)

    def pop(self):
        if self.empty():
            return -1
        num = self.queue[0]
        del self.queue[0]
        return num

    def front(self):
        if self.empty():
            return -1
        return self.queue[0]

    def back(self):
        if self.empty():
            return -1
        return self.queue[-1]

queue = queue()
for _ in range(n):
    command = input().split()
    if command[0] == 'push':
        queue.push(command[1])
    elif command[0] == 'pop':
        print(queue.pop())
    elif command[0] == 'size':
        print(queue.size())
    elif command[0] == 'empty':
        print(queue.empty())
    elif command[0] == 'front':
        print(queue.front())
    elif command[0] == 'back':
        print(queue.back())
