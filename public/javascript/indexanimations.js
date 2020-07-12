// eslint-disable-next-line no-undef
const tl = gsap.timeline();

tl.to(
    '#earth',
    {
        delay: 3,
        duration: 4,
        y: '80vh',
        opacity: 0,
        ease: 'sine.in',
    },
    'earthFade',
);
tl.from(
    '#astronaut',
    {
        delay: 3,
        duration: 4,
        css: { scale: 0.4 },
        ease: 'power1.inOut',
    },
    'earthFade',
);
tl.from(
    '#welcome-container h1',
    {
        duration: 0.7,
        x: 110,
        opacity: 0,
        ease: 'circ',
    },
    'name',
);
tl.from(
    'nav',
    {
        delay: 0,
        duration: 0.7,
        x: -110,
        opacity: 0,
        ease: 'circ',
    },
    'name',
);
