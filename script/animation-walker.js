import { walker } from "./mecanic-animation.js";

const person = document.querySelector('.person-animation');
document.addEventListener('keypress', e =>{
    walker(e.key, person);
})
document.addEventListener('keydown', e =>{
    const btn = e.code;
    walker(btn, person);
})
