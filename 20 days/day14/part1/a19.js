const a = ['Hydrogen','Helium','Lithium','Berrylium'];

const a2 = a.map(function(s){
    return s.length
});

console.log(a2);

const a3 = a.map((s) => s.length);

console.log(a3);