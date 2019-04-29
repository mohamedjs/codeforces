x,y     = map(int,input().split())
numbers = map(int,input().split())
n       = int(input())
newl    = []
for _ in range(n):
    a,b = map(int,input().split())
    newl.append(a+b)
print(x+y)
print(list(numbers))
print(sorted(newl))
