import anime from "./node_modules/animejs/lib/anime.es.js"
let a = document.querySelector(".osnimg")
let b = document.querySelector(".img")

a.addEventListener("mouseover", ()=> {
    anime({
        targets: a,
        borderRadius: '20%',
        easing: 'easeInOutExpo'
    });
});


a.addEventListener("mouseout", ()=> {
    anime({
        targets: a,
        borderRadius: '1%',
    });
});

a.addEventListener("mouseover", ()=> {
    anime({
        targets: b,
        scale:'1.6',
        easing: 'easeInOutExpo'
        
    });
});


a.addEventListener("mouseout", ()=> {
    anime({
        targets: b,
        scale:'1',
    });
});

