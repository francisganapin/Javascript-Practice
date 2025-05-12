const jsonData = '[{"name":"Maria","age":30},{"name":"Leo","age":28}]';


const data = JSON.parse(jsonData);
for (const item of data){
    console.log(item.name,item.age);
}