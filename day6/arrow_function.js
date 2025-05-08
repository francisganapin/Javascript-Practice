const obj = {
    names:'Whely Krea',
    greet:function(){
        setTimeout(()=>{
            console.log(`Hello, ${this.names}`);
        },1000);
    }
};

obj.greet()