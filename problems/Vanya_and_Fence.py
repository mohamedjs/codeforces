import math
x,y = map(int,input().split())
inp = []
data= list(map(int,input().split()))
output = [int(math.ceil(i/y)) if int(i/y)>0 else 1 for i in data]
print(sum(output))
