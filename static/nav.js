document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.querySelector('aside button.close');
    const aside = document.querySelector('aside');
    const backdrop = document.querySelector('.backdrop');

    menuBtn.addEventListener('click', () => {
        aside.style.right = '0';
        backdrop.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        aside.style.right = '-320px';
        backdrop.classList.remove('active');
    });

    backdrop.addEventListener('click', () => {
        aside.style.right = '-320px';
        backdrop.classList.remove('active');
    });
});
