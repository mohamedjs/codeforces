#include <iostream>

using namespace std;

int main()
{
    string  s;
    int j=0;
    cin>>s;
    for(int i=0;i<s.length();i++){

        if(++i < s.length() && s.at(i) == s.at(++i)){
            j++;
        }
    }
    cout<<j<<endl;
    if(j%2==0){
    cout << "No" << endl;
    }
    else{
    cout << "Yes" << endl;
    }

    return 0;
}
