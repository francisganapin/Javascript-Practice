const members = [
    { gym:'Mr.malasan Gym guro',  members:25 },
    { gym:'Malasakit Gym',        members:30 },
    { gym:'Bugbog Sport Center',  members:10 }
];

const count_members = members.filter(p => p.members >= 20);
console.log(count_members.map(p => p.gym));
