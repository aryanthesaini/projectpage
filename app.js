const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

const tl = new TimelineLite({ paused: true, reversed: true });

tl.to('.cover', 0.5, {
    width: "60%",
    ease: Power2.easeOut
})
    .to('nav', 0.5, {
        height: '100%',
        ease: Power2.easeOut
    })
    .fromTo('.nav-open', 0.5, {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut
    }, {
        opacity: 1,
        x: 0,
        onComplete: function () {
            navOpen.style.pointerEvents = 'auto';
        }
    })


navButton.addEventListener('click', () => {
    toogleTween(tl);
});



function toogleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}