const member = {
    id:101,
    person_name:'Mark Reyes',
    membership:{
        type:'Gold',
        startDate:'2025-01-01',
        trainer:{
            id:10,
            name:'Coach Anna',
            specialty:'Endurance'
        }
    }
};

const {
    name:memberName,
    membership:{
        type:membershipType,
        trainer:{person_name:trainerName,specialty}
    } 
} = member;

console.log(`${memberName} is on a ${membershipType} plan with ${trainerName} (${specialty})`);