let walkerAnimation = {};
const keyDb = ['w', 's', 'd', 'a', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
let isWalker = false;
export function walker(key, person){
    if(!walkerAnimation[key]){
        switch(key){
            case 'w':
                walkerAnimation[key] = animationWalker(person, [
                    '../assign/image/person/w-walker-removebg-preview.png',
                    '../assign/image/person/w-walker2-removebg-preview.png'
                ]);
                walkerAnimation[`${key}-Stoped`] = '../assign/image/person/person-verse-complet.png'
                break;
            case 's':
                walkerAnimation[key] = animationWalker(person, [
                    '../assign/image/person/walk1-removebg-preview.png',
                    '../assign/image/person/walk2-removebg-preview.png'
                ]);
                walkerAnimation[`${key}-Stoped`] = '../assign/image/person/stoped-complet.png'
                break;
            case 'd':
                walkerAnimation[key] = animationWalker(person, [
                    '../assign/image/person/d-inside-removebg-preview.png',
                ]);
                walkerAnimation[`${key}-Stoped`] = '../assign/image/person/d-inside-removebg-preview.png'
                break;
            case 'a':
                walkerAnimation[key] = animationWalker(person, [
                    '../assign/image/person/a-inside-removebg-preview.png',
                ]);
                walkerAnimation[`${key}-Stoped`] = '../assign/image/person/a-inside-removebg-preview.png'
                break;
            case 'ArrowUp':
                walkerAnimation[key] = animationWalker(person, [
                    '../assign/image/person/w-walker-removebg-preview.png',
                    '../assign/image/person/w-walker2-removebg-preview.png'
                ]);
                walkerAnimation[`${key}-Stoped`] = '../assign/image/person/person-verse-complet.png'
                break;
            case 'ArrowDown':
                walkerAnimation[key] = animationWalker(person, [
                    '../assign/image/person/walk1-removebg-preview.png',
                    '../assign/image/person/walk2-removebg-preview.png'
                ]);
                walkerAnimation[`${key}-Stoped`] = '../assign/image/person/stoped-complet.png'
                break;
            case 'ArrowLeft':
                walkerAnimation[key] = animationWalker(person, [
                    '../assign/image/person/a-inside-removebg-preview.png',
                ]);
                walkerAnimation[`${key}-Stoped`] = '../assign/image/person/teste.png'
                break;
            case 'ArrowRight':
                walkerAnimation[key] = animationWalker(person, [
                    '../assign/image/person/d-inside-removebg-preview.png',
                ]);
                walkerAnimation[`${key}-Stoped`] = '../assign/image/person/d-inside-removebg-preview.png'
                break;
        };
    }
    if(keyDb.includes(key)){
        stepAnimation(walkerAnimation[key], person, walkerAnimation[`${key}-Stoped`]);
    }
};
async function stepAnimation(gerator, target, src){
    if(isWalker) return;
    isWalker = true;
    const{done} = gerator.next();
    if(!done){        
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    target.setAttribute('src', src)
    isWalker = false;

}
function* animationWalker(target, src){
    let index = 0;
    while(true){
        yield target.setAttribute('src', src[index]);
        index = (index + 1) % src.length;
    }
}