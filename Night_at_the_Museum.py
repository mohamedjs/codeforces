str = input()
temp = 97
out = []
for ch in str:
    if(abs(temp-ord(ch)) < 13):
        out.append(abs(temp-ord(ch)))
    else:
        out.append(26-abs(temp-ord(ch)))
    temp=ord(ch)
print(sum(out))
          
