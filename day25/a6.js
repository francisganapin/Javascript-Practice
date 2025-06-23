async function getData(url){
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error('HTTP ERROR:${response.status}');
        }
        const data = await response.json();
        console.log(data);
    }catch (err){
        console.error('Fetch failed',err.message);
    }
}

getData("https://jsonplaceholder.typicode.com/posts/1");
