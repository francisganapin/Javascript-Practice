const user  = {profile:{names:'alice'}};

console.log(user.profile?.names);
console.log(user.address?.city);

const score = null;
console.log(score ?? 100);