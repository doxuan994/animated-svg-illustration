TweenMax.to('#arm', 0.3, {
    attr: {
        d: 'M 517 265 q 15 0 25 -15 q 20 -20 20 0 Q 550 295 510 300'
    },
    repeat: -1,
    yoyo: true
});

TweenMax.to('#legs-back', 0.3, {
    y: 10,
    repeat: -1,
    yoyo: true
});

TweenMax.to('#legs-front', 0.3, {
    y: -10,
    repeat: -1,
    yoyo: true
});

TweenMax.to('#tail', 0.3, {
    rotation: 10,
    transformOrigin: '0% 50%',
    repeat: -1,
    yoyo: true
});

TweenMax.fromTo('#boat', 3, {
    rotation: -5,
    y: 30
}, {
    rotation: 5,
    transformOrigin: '50% 100%',
    repeat: -1,
    yoyo: true,
    ease: Circ.easeInOut
});




































//
