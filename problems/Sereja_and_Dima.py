n            = int(input())
cards        = map(int,input().split())
player       = list(cards)
all_card     = []
for i in range(n):
    if len(player) > 0:
        if player[0]>player[-1]:
             all_card.append(player[0])
             player.pop(0)
        else:
            all_card.append(player[-1])
            player.pop(-1)
first = [num if i%2==0 else 0 for i,num in enumerate(all_card)]
second = [num if i%2!=0 else 0 for i,num in enumerate(all_card)]
print(sum(first),sum(second))
