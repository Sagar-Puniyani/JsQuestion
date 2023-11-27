#include <bits/stdc++.h>
using namespace std;

struct mystruct{
    int x;
    float y;
    char s[16];
};

union Onion
{
    int x;
    float y;
    char s[16];
};


int main()
{
    struct mystruct st;
    union Onion Ojh;

    printf("Union : %d \n", sizeof(Ojh));
    printf("struct : %d  ", sizeof(st));
    printf("\nsize is char[16] : %d" , sizeof(char[16]));
    printf("\nSizeof float : %d" , sizeof(float));
    
    return 0;
}