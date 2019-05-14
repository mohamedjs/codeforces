strip         = list(map(int,input().split()))
str_appear    = input()
output        = [strip[int(i)-1] for i in str_appear]
print(sum(output))
