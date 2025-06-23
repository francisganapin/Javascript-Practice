

async function fetchData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/3');
    let data = await response.json();
    console.log(data);
}
fetchData();