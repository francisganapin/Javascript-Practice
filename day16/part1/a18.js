const names = ['Anna','Bob','Amanda','Alex'];


const aName = names.filter(name => {
    if (name.startsWith('B')){
        return true;
    }
    return false
});

console.log(aName);