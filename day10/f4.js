const members = [
    { gym:'Mr.malasan gym guro',members:25 },
    { gym:'Malasakit gym',      members:30 },
    { gym:'Bugbog sport Center',members:10 }
];

const counter_members = members.filter(p => p.members >= 20);
console.log(counter_members.map(p => p.gym ));