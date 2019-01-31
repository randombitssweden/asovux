#include <stdio.h>
//#include <stdin.h>
#include <stdlib.h>
#include <time.h>

int givenum() {
    return rand() % 10;
}
void main() {
    srand(time(NULL));
    int tal1[5];
    int tal2[5];
    int svar[5];
    for (int i=0;i<5;i++) {
        while (tal1[i] < tal2[i]) {
            tal1[i] = givenum();
            tal2[i] = givenum();
        }
    }
    int l = 0;
    for(int i=0 ; tal1[l] != '\0'; i++) {
        printf("%s - %s = %s", tal1[l], tal2[l], svar[l]);
    }
    
}