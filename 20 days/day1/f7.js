const person = 'Mike';
const age = 28;

const person2 = 'Sarah';
const age2 = 101;


function myTag(string,personExp,ageExp){
    const str0 = string[0];
    const str1 = string[1];
    const str2 = string[2];

    const ageStr = ageExp < 100 ? 'youngster' :'centenarian';

    return `${str0} ${personExp} ${str1} ${ageStr} ${str2}`;
}


const output = myTag`That ${person} is a ${age}.`;
const output2 = myTag `that ${person2} is a ${age2}.`;


console.log(output);
console.log(output2);