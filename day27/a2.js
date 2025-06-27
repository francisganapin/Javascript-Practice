activeUsers["john"] = { active: false, lastSeen: new Date() };



const date = activeUsers["john"].lastSeen;
console.log(date.toLocaleTimeString()); // e.g., "10:32:14 AM"


console.log(date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })); // e.g., "19:25:42"