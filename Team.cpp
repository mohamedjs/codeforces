#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i,n,x[1000][3],j,s=0,z=0;
    scanf("%d",&n);
    for(i=0;i<n;i++){
        for(j=0;j<3;j++){
            scanf("%d",&x[i][j]);
        }
    }
     for(i=0;i<n;i++){
        for(j=0;j<3;j++){
            if(x[i][j]==1){
               s++;
            }
            }
            if(s>1){
                s=1;
                z+=s;
            }
            s=0;
    }
    printf("%d",z);
    return 0;
}
