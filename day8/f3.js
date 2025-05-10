async function fetchData(){
    try{
        let response = await fetch('http://127.0.0.1:5000/api/user/');
        let data = await response.json();
        console.log(data);
    }catch (error){
        console.error('Erorr  fetch data',error);
    }
}

fetchData();