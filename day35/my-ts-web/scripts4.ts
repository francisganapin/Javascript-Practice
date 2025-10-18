interface Employee {
    id:number;
    names:string;
    role:string;
}

let employees:Employee[] = [
    {id:1,names:'John',role:'Manager'},
    {id:2,names:'Sarah',role:"Assistant"}
];

const form = document.getElementById('addForm') as HTMLFormElement;
const table = document.getElementById('employeeTable') as HTMLSelectElement;


function renderEmployees(){
    table.innerHTML = "";

    employees.forEach(emp => {
        const row = document.createElement('tr');

        row.innerHTML =`
            <td>${emp.id}</td>
            <td><input type="text" value="${emp.names}" id="name-${emp.id}" /></td>
            <td><input type="text" value="${emp.role}" id="role-${emp.id}" /></td>

            <td>
                    <button onclick="updateEmployee(${emp.id})">Save</button>
                    <button onclick="deleteEmployee(${emp.id})">Delete </button>
            </td>
        `;
        table.appendChild(row);

    });
}


form.addEventListener('submit',e => {
    e.preventDefault();

    const names = (document.getElementById('empName') as HTMLInputElement).value;
    const role = (document.getElementById('empRole')as HTMLInputElement).value;

    const newEmployee: Employee ={
        id: employees.length ? employees[employees.length -1].id + 1 : 1,
        names,
        role
    };
    employees.push(newEmployee);
    form.reset();
    renderEmployees();
});

function updateEmployee(id:number){
    const nameInput = document.getElementById(`name-${id}`) as HTMLInputElement;
    const roleInput = document.getElementById(`role-${id}`) as HTMLInputElement;


    const employee = employees.find(emp => emp.id === id);
    if(employee){
        employee.names = nameInput.value;
        employee.role = roleInput.value;
        alert(`Employee ID ${id} updated successfully`);
    }else{
        alert(`Employee with ID ${id} not found`);
    }
}

function deleteEmployee(id:number){
    employees = employees.filter(emp => emp.id !==id);
    renderEmployees();
}

renderEmployees();

(window as any).updateEmployee = updateEmployee;
(window as any).deleteEmployee = deleteEmployee;