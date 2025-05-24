const allItems = ['Preworkout','Whey','Creatine','Mass Gainer'];
const search = 'Whey';


const result = allItems.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
);

if(result.length > 0 ){
    console.log('Search results:', result);
}else{
    console.log('No result found');
}