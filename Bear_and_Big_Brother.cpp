#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i,x,y;
    scanf("%d %d",&x,&y);
    if(y>=x){
    for(i=1;;i++){
       x=x*3;
       y=y*2;
       if(x>y){
        printf("%d",i);
        break;
       }
    }
    }
    return 0;
    
}
