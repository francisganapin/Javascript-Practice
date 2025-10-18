const btn = document.getElementById('btn') as HTMLButtonElement;
const msg = document.getElementById('msg') as HTMLElement;


btn.addEventListener('click',() => {
    msg.textContent = 'Hello from TypeScript!';
});