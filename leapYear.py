def leapYear(year):
    if( year % 400 == 0 or year % 4 == 0 and year % 100 != 0):
        print(str(year) + ' is a leap year')
    else:
        print(str(year) + ' is NOT a leap year')

# test cases
leapYear(1996)
leapYear(2020)
leapYear(2021)