var employees = [
    { id: 1, names: 'John', role: 'Manager' },
    { id: 2, names: 'Sarah', role: "Assistant" }
];
var form = document.getElementById('addForm');
var table = document.getElementById('employeeTable');
function renderEmployees() {
    table.innerHTML = "";
    employees.forEach(function (emp) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(emp.id, "</td>\n            <td><input type=\"text\" value=\"").concat(emp.names, "\" id=\"name-").concat(emp.id, "\" /></td>\n            <td><input type=\"text\" value=\"").concat(emp.role, "\" id=\"role-").concat(emp.id, "\" /></td>\n\n            <td>\n                    <button onclick=\"updateEmployee(").concat(emp.id, ")\">Save</button>\n                    <button onclick=\"deleteEmployee(").concat(emp.id, ")\">Delete </button>\n            </td>\n        ");
        table.appendChild(row);
    });
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var names = document.getElementById('empName').value;
    var role = document.getElementById('empRole').value;
    var newEmployee = {
        id: employees.length ? employees[employees.length - 1].id + 1 : 1,
        names: names,
        role: role
    };
    employees.push(newEmployee);
    form.reset();
    renderEmployees();
});
function updateEmployee(id) {
    var nameInput = document.getElementById("name-".concat(id));
    var roleInput = document.getElementById("role-".concat(id));
    var employee = employees.find(function (emp) { return emp.id === id; });
    if (employee) {
        employee.names = nameInput.value;
        employee.role = roleInput.value;
        alert("Employee ID ".concat(id, " updated successfully"));
    }
    else {
        alert("Employee with ID ".concat(id, " not found"));
    }
}
function deleteEmployee(id) {
    employees = employees.filter(function (emp) { return emp.id !== id; });
    renderEmployees();
}
renderEmployees();
window.updateEmployee = updateEmployee;
window.deleteEmployee = deleteEmployee;
