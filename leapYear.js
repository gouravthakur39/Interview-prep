function leapYear(year) {
    if ( year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
        return `${year} + is a leap year`
    } else {
        return `${year} + is NOT a leap year`
    }
}


//test cases 
console.log(leapYear(1996)); //leap
console.log(leapYear(2020)); //leap
console.log(leapYear(2021)); //not leap