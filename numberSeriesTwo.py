# 0, 0, 2, 1, 4, 2, 6, 3, 8, 4, 10, 5, 12, 6, 14, 7, 16, 8

n = int(input('enter the number:'))

a=0
b=0

for i in range(1,n+1):
    if(i%2!=0):
        a= a+2
    else:
        b= b+1

if(n%2!=0):
    print('{}'.format(a-2))
else:
    print('{}'.format(b-1))