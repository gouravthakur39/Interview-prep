n = int(input())
c = 'R'
x,y=0,0
for i in range(n):
    if c=='R':
        x = abs(x) + 10;
        y = abs(y);
        c ='U';
    elif c=='U':
        y = y + 20;
        c = 'L';
    elif c=='L':
        x = -(x + 10);
        c = 'D';
    elif c=='D':
        y = -(y);
        c = 'R';
print(x,y)