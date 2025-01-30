document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.querySelector('.progress').style.width = percent + '%';
    });
});
