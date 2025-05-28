const NOTIFY ={
    EMAIL:1,
    SMS:2,
    PUSH:4
};

let userNotify = NOTIFY.EMAIL | NOTIFY.PUSH;

const wantsSMS = (userNotify & NOTIFY.SMS) !== 0;
console.log(wantsSMS);

userNotify |= NOTIFY.SMS;
console.log(userNotify)