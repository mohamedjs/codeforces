x,y = map(int,input().split())
sum=0
for i in range(x):
    number1 = list(map(int,list(input())))
    number2 = list(range(y+1))
    number1.sort()
    print(number1,number2)
    if(set(number2).issubset(number1)):
        sum+=1
print(sum)
