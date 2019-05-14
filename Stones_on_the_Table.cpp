#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i=0,n,s=0;
    char a[100];
    char x;
    scanf("%d",&n);
    scanf("%s",a);
    for(i=0;i<n;i++){
            if(a[i]==a[i-1]){
                s++;
            }
    }
    printf("%d",s);
    return 0;
}
