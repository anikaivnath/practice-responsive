const btn = document.getElementById('icon');
const navLinks = document.getElementById('nav');

btn.addEventListener('click', () => {
    navLinks.classList.toggle('on');
});
