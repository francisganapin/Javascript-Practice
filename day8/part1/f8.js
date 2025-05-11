const handler = {
    get(target,property){
        return property in target ? target[property]:'Property not found';

    }
};

const obj = new Proxy({name:'Francis'},handler);
console.log(obj.name);
console.log(obj.age);