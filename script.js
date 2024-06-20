let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;

    text.style.marginTop = value*2 + 'px';
    leaf.style.marginTop = value*-1.2 + 'px';
    leaf.style.marginLeft = value*1.2 + 'px';
    hill5.style.marginLeft = value*1.2 + 'px';
    hill4.style.marginLeft = value*-1.2 + 'px';
    hill1.style.marginTop = value*1 + 'px';
})
