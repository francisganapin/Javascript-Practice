const patients = [];
const form = document.getElementById('patientForm');
const table = document.getElementById('patientTable');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("names").value;
    const ageInput = Number(document.getElementById('age').value);
    const diagnosisInput = document.getElementById('diagnosis').value;
    const newPatient = {
        names: nameInput,
        age: ageInput,
        diagnosis: diagnosisInput
    };
    patients.push(newPatient);
    form.reset();
    renderPatients();
});
function renderPatients() {
    table.innerHTML = "";
    patients.forEach((p) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${p.names}</td>
        <td>${p.age}</td>
        <td>${p.diagnosis}</td>
        `;
        table.appendChild(row);
    });
}
