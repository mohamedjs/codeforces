n = int(input())
data =input()
anton = [1 if i=='A' else 0 for i in data]
danik = [1 if i=='D' else 0 for i in data]
if sum(anton)>sum(danik):
    print('Anton')
elif sum(anton)<sum(danik):
    print('Danik')
else:
    print('Friendship')
