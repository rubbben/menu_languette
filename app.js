const menuSlider = document.querySelector('.menuSlider');
const btn = document.querySelector('.btn');
const itemListe = document.querySelectorAll('.menuItem');
const imgChange = document.getElementById('imgChange');
let toggle = 0;
let imgDejaMiseEnPlace = 0;


btn.addEventListener('click', () => {

    if (toggle === 0) {
        toggle++;
        gsap.to(menuSlider, {duration:1.75, x:0, ease:"expo.out"});
    } else {
        toggle--;
        gsap.to(menuSlider, {duration:1.75, x:1800});
    }

});


itemListe.forEach(item => item.addEventListener('mouseenter', () => {

    if(item.getAttribute('data-id') === imgDejaMiseEnPlace) {
        return;
    } else {
        
        imgChange.src = "ressources/pic" + item.getAttribute('data-id') + ".jpg";
        gsap.to(imgChange, {duration:0.1, opacity: 0.4});
        gsap.to(imgChange, {duration:0.2, delay:0.1, opacity:1});
        imgDejaMiseEnPlace = item.getAttribute('data-id');

    }

}));


itemListe.forEach(item => item.addEventListener('click', () => {

    toggle--;
    gsap.to(menuSlider, {duration:1.75, x:1800});

}));