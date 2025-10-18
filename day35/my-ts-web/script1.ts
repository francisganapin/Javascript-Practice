interface Patient {
    names:string;
    age:number;
    diagnosis:string;
}

const patients:Patient[] = [];



const form = document.getElementById('patientForm') as HTMLFormElement;
const table = document.getElementById('patientTable') as HTMLTableSectionElement;



form.addEventListener('submit',(e) => {
    e.preventDefault();

    const nameInput = (document.getElementById("names")as HTMLInputElement).value;
    const ageInput = Number((document.getElementById('age')as HTMLInputElement).value);
    const diagnosisInput = (document.getElementById('diagnosis') as HTMLInputElement).value;

    const newPatient: Patient ={
        names:nameInput,
        age:ageInput,
        diagnosis:diagnosisInput
    }

    patients.push(newPatient);

    form.reset();

    renderPatients();
});

function renderPatients(){
    table.innerHTML ="";
    patients.forEach((p) =>{
        const row = document.createElement('tr');
        row.innerHTML =`
        <td>${p.names}</td>
        <td>${p.age}</td>
        <td>${p.diagnosis}</td>
        `;
        table.appendChild(row);
    });
}