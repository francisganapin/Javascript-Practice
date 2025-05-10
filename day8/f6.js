const memoize = fn => {
    let cache = {};
    return arg => cache[arg] || (cache[arg] = fn(arg));
};

const square = memoize(x => x * x);
console.log(square(4));
console.log(square(4));