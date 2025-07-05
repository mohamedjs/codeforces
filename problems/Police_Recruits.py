n       = int(input())
numbers = list(map(int,input().split()))
has,occ = (0,0)      
for num in numbers:
    if num>0:
        has+=num
    elif has>0:
        has-=1
    else:
        occ+=1
print(occ)
