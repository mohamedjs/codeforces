#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i,j,x[5][5];
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            scanf("%d",&x[i][j]);
            if(x[i][j]==1){
                printf("%d",abs(i-2)+abs(j-2));
                break;
            }
        }
    }
    return 0;
}
