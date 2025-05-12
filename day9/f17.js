const CLASSES = {
    MONDAY:1,
    TUESDAY:2,
    WENSDAY:4,
    THURSDAY:8,
    FRIDAY:16,
    SATURDAY:32,
    SUNDAY:64
};

let attendance = CLASSES.MONDAY | CLASSES.WENSDAY | CLASSES.FRIDAY;

console.log((attendance & CLASSES.WENSDAY) !== 0);

attendance |= CLASSES.THURSDAY;