#include <bits/stdc++.h>
#include <vector>
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

    printf("Union : %llu \n", sizeof(Ojh));
    printf("struct : %llu  ", sizeof(st));
    printf("\nsize is char[16] : %llu" , sizeof(char[16]));
    printf("\nSizeof float : %llu" , sizeof(float));
    
    return 0;
}