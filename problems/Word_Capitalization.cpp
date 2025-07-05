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
    char x = toupper(s1.at(0));
    s1.erase(0, 1);
    cout << x << s1 << endl;
    return 0;
}
