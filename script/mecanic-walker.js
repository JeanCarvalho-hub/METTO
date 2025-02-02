let limitWidth = window.innerWidth;
let limitHeight = window.innerWidth;
let positionY = 0;
let positionX = 0;
const speed = 10;

const elementPerson = document.querySelector('.person-animation');
document.addEventListener('keydown', e =>{
    switch(e.key){
        case 's':
        case 'ArrowDown':            
            if(positionY + speed <= limitHeight) positionY += speed;
            console.log()
            break;
        case 'ArrowUp':
            if(positionY - speed >= 0) positionY -= speed;
            break;
        case 'ArrowRight':
            if(positionX + speed <= limitWidth) positionX += speed;
            break;
        case 'ArrowLeft':
            if(positionX - speed >= 0)positionX -= speed;
            break;
        }

    elementPerson.style.transform = `translate(${positionX}px, ${positionY}px)`;

});
