async function fetchCat(){
    try{
        let response = await fetch('http://127.0.0.1:5000/cats');
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log('Error fetch data');
    }
}
fetchCat();