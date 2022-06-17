gsap.from('.background', {
    delay: 1,
    duration: 1.5,
    ease: 'expo.inOut',
    scale: 2.5,
});
gsap.from('.background .text img', {
    delay: 1.5,
    x: -100,
    duration:1.5,
    ease: 'expo.inOut',
    // x is left and right, x +ve -> right, x-ve -> left,  y+ve -> up and y-ve down.
    opacity: 0

});
gsap.from('.background .text button', {
    delay: 2,
    x: -100,
    duration:1.5,
    ease: 'expo.inOut',
    // x is left and right, x +ve -> right, x-ve -> left,  y+ve -> up and y-ve down.
    opacity: 0

});
gsap.from('.anotext h1', {
    delay: 2.5,
    y: -100,
    duration:1.5,
    ease: 'expo.inOut',
    // x is left and right, x +ve -> right, x-ve -> left,  y+ve -> up and y-ve down.
    opacity: 0

});
gsap.from('.anotext p', {
    delay: 2.8,
    x: -100,
    duration:1.5,
    ease: 'expo.inOut',
    // x is left and right, x +ve -> right, x-ve -> left,  y+ve -> up and y-ve down.
    opacity: 0

});
gsap.from('.anotext button', {
    delay: 3.2,
    y: 100,
    duration:1.5,
    ease: 'expo.inOut',
    // x is left and right, x +ve -> right, x-ve -> left,  y+ve -> up and y-ve down.
    opacity: 0

});
