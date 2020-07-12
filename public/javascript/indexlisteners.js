setTimeout(() => {
    let sectionTitle;
    let windowHeight;

    function init() {
        sectionTitle = document.querySelector('#skills');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        const positionFromTop = sectionTitle.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            document.querySelector('nav').classList.add('minimized');
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
}, 8000);

document.querySelector('#about').addEventListener('click', () => { window.location.href = `${window.location.href.split('#')[0]}#about-title`; });
document
    .querySelector('#portfolio')
    .addEventListener('click', () => { window.location.href = `${window.location.href.split('#')[0]}#portfolio-title`; });
document
    .querySelector('#contact')
    .addEventListener('click', () => { window.location.href = `${window.location.href.split('#')[0]}#contact-title`; });
document
    .querySelector('.logo')
    .addEventListener('click', () => document.querySelector('nav').classList.toggle('minimized'));
