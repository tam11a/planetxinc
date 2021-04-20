#include <stdio.h>

int m[3][3];
int ans = 0;

void toh(int n, int f_rod, int t_rod, int u_rod){
    if(n==1){
        ans += m[f_rod][t_rod];
        return;
    }
    toh(n-1, f_rod, u_rod, t_rod);
    ans += m[f_rod][t_rod];
    toh(n-1, u_rod, t_rod, f_rod);
}

int main(void) {
    int i, j;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            scanf("%d",&m[i][j]);
        }
    }
    int n;
    scanf("%d",&n);
    toh(n, 0, 2, 1);
    printf("%d",ans);
    return 0;
}