const API_BASE = `http://127.0.0.1:5000/api/students`;


async function deleteStudent(id){
    try{
        const response = await fetch(`${API_BASE}/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
            },
        });


        if(!response.ok){
            throw new Error(`Failed to delete student (student:${response.status})`);
        }


        let data = null;
        if (response.status !== 204){
            try{
                data = await response.json();
            }catch{
                data = {message:`Deleted successfully, no Json Response`};
            }
        }

        console.log('Messsage deleted:',data);
        return data;
    }catch (error){
        console.error('Error deleting student:',error.message);
    }
}

deleteStudent(4);