def primeNumber(num):
    if (num == (0 or 1)):
        print(str(num) + ' is NOT a prime number')
    elif (num != 0 and num % num == 0):
        print(str(num) + ' is a prime number')
    else:
        print(str(num) + ' is NOT a prime number')
    
# test cases
primeNumber(2)
primeNumber(3)
primeNumber(43)
primeNumber(0)
primeNumber(1)