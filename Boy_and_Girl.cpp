#include <iostream>
#include <string>
#include <stdio.h>
#include <algorithm>
#include <cstring>
using namespace std;

int main()
{
  string s1;
  cin >> s1;
  for (int i = 0; i < s1.length(); i++)
  {
    char c = s1.at(i);
    for (int j = i + 1; j < s1.length(); j++)
    {
      if (c == s1.at(j))
      {
        s1.erase(j, 1);
        j = j - 1;
      }
    }
  }
  if (s1.length() % 2 == 0)
  {
    cout << "CHAT WITH HER!" << endl;
  }
  else
  {
    cout << "IGNORE HIM!" << endl;
  }
