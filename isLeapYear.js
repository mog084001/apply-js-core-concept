function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isMyLeapYear = isLeapYear(2022);
console.log('My year:', isMyLeapYear);

const isHerLeapYear = isLeapYear(1960);
console.log('Her Year:', isHerLeapYear);