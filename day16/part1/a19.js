const input = ['apple','banana','cherry'];

const allowed = new Set(['banana','orange']);


if (input.some(item => allowed.has(item))){
    console.log('Valid item found');
}