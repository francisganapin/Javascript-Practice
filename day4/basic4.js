const employee = {
    name:'Jane',
    job:{
        title:'Developer',
        year:5
    }
};

let { job:{title,year} } = employee;

console.log(title);
console.log(year);