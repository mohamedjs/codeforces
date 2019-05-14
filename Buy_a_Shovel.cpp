#include<bits/stdc++.h>
using namespace std;
int main()
{
  int k, r, n1, i, n2, money;
  cin>>k>>r;
  n1=0;
  n2=0;
  for(i=0;; i++)
    {
      money=10*i+r;
      if(money%k==0)
	n1=money/k;
      money=10*i;
      if(money%k==0)
	n2=money/k;

      if(n1!=0 && n2==0)
	{
	  cout<<n1<<endl;
	  break;
	}

      if(n2!=0 && n1==0)
	{
	  cout<<n2<<endl; break; } if(n1==0 && n2==0) continue; if(n1>n2)
								  {
								    cout<<n2<<endl;
								    break;
								  }
      else
	{
	  cout<<n1<<endl;
	  break;
	}
    }
return 0;
}
