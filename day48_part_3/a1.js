const userSettings ={
    theme:"dark",
    notifications:"enabled"
};


console.log("Theme:",userSettings.theme);

if("theme" in userSettings){
    console.log("Theme is set");
}

for(const [key,value] of Object.entries(userSettings)){
    console.log(`${key}: ${value}`);
    
}

delete userSettings.theme;
console.log("After removing theme:",userSettings);