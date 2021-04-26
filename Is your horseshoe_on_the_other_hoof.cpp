#include <iostream>
#include <string>
#include <stdio.h>
#include <algorithm>
#include <cstring>
using namespace std;
int main()
{
  int a[4], s = 0;
  for (int i = 0; i < 4; i++)
  {
    cin >> a[i];
  }
  sort(a, a + 4);
  for (int i = 0; i < 4; i++)
  {
    if (i != 3)
      if (a[i] == a[i + 1])
      {
        s++;
      }
  }
  cout << s << endl;
  return 0;
}
