var patients = [
    { id: 1, names: 'Alice', age: 25 },
    { id: 2, names: "Bob", age: 30 },
    { id: 3, names: "Charlie", age: 40 }
];
var list = document.getElementById('patientList');
var form = document.getElementById('editForm');
function displayPatients() {
    list.innerHTML = "";
    patients.forEach(function (p) {
        var li = document.createElement('li');
        li.textContent = "ID: ".concat(p.id, " | Name: ").concat(p.names, " | Age: ").concat(p.age);
        list.appendChild(li);
    });
}
displayPatients();
function editPatientById(id, newName, newAge) {
    var patient = patients.find(function (p) { return p.id === id; });
    if (patient) {
        patient.names = newName;
        patient.age = newAge;
        alert("Updated patient ID ".concat(id, " successfully!"));
    }
    else {
        alert('Patient with id ${id} not found.');
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var id = Number(document.getElementById("editId").value);
    var names = document.getElementById("editName").value;
    var age = Number(document.getElementById('editAge').value);
    editPatientById(id, names, age);
    displayPatients();
    form.reset();
});
