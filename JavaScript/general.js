const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav ul');

if(toggle && nav){
    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('show');
    });
}