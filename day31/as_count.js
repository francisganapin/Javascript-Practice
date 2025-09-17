async function getStudent(){
    try{
        const response = await fetch('http://127.0.0.1:5000/api/students/',
            {
                method:'GET',
                headers:{'Accept':'application/json'},
            }

        );

        if(!response.ok){
            throw new Error(`Server error: ${response.status}`);
        }
        const data = await response.json();
        console.log('Student list',data);
    }catch(error){
        console.error(`Error list student`,error);
    }
    
}

getStudent();