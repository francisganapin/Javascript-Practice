const days = {
    0:'Sunday',
    1:'Monday',
    2:'Tuesday',
    3:'Wednesday',
    4:'Thursday',
    5:'Friday',
    6:'Saturday'
};

const today = new Date().getDay();
console.log(days[today] || 'Invalid day');