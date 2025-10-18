interface Patient{
    id:number;
    names:string;
    age:number;
}

let patients:Patient[] = [
    {id:1,names:'Alice',age:25},
    {id:2,names:"Bob",age:30 },
    {id:3,names:"Charlie",age:40}
];

const list = document.getElementById('patientList') as HTMLDataListElement;
const form = document.getElementById('editForm') as HTMLFormElement;


function displayPatients(){
    list.innerHTML = "";
    patients.forEach(p =>{
        const li = document.createElement('li');
        li.textContent = `ID: ${p.id} | Name: ${p.names} | Age: ${p.age}`;
        list.appendChild(li);
    });
}

displayPatients();

function editPatientById(id:number,newName:string,newAge:number){
    const patient = patients.find(p => p.id === id);

    if (patient){
        patient.names = newName;
        patient.age = newAge;
        alert(`Updated patient ID ${id} successfully!`);
    }else{
        alert('Patient with id ${id} not found.');
    }
}


form.addEventListener('submit',e => {
    e.preventDefault();
    const id = Number((document.getElementById("editId") as HTMLInputElement).value);
    const names = (document.getElementById("editName") as HTMLInputElement).value;
    const age = Number((document.getElementById('editAge') as HTMLInputElement).value);

    editPatientById(id,names,age);
    displayPatients();
    form.reset();
})