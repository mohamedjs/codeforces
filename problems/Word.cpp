#include <iostream>
#include <string>
#include <stdio.h>
#include <algorithm>
using namespace std;

int main()
{
    string word;
    int s1 = 0, s2 = 0;
    cin >> word;
    for (int i = 0; i < word.length(); i++)
    {
        if (isupper(word.at(i)))
        {
            s1++;
        }
        else
        {
            s2++;
        }
    }
    if (s1 > s2)
    {
        transform(word.begin(), word.end(), word.begin(), ::toupper);
        cout << word << endl;
    }
    else
    {
        transform(word.begin(), word.end(), word.begin(), ::tolower);
        cout << word << endl;
    }
}
