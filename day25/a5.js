async function safeFetch(){
    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if(!res.ok) throw new Error('Post not Found');
        let data = await res.json();
        console.log(data);
    }catch(err){
        console.error('Error',err.message);
    }
}
safeFetch();