const statusMessage = {
    200:'ok',
    404:'Not Found',
    500:'Internal Server Errro',
    403:'Forbidden'
};

let code = 404;
console.log(statusMessage[code] || 'Unknown Status');