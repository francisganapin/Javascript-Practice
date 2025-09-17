async function addStudent(){
    try{
        const response = await fetch('http://127.0.0.1:5000/api/students',{
            method:'POST',
            headers:{'Content-Type':'application/json'},

            body:JSON.stringify({
                id:42,
                name:'Patricia Gago 2',
                age:25,
                email:"Partmanli_updatedg@gmail.com"
            })
        });

        if(!response.ok){
            throw new Error(`Server error: ${response.status}`);
        }
        const data = await response.json();
        console.log(`Student added`,data);

    } catch(error){
        console.error(`Error insert student`,error);
    }
}

addStudent();