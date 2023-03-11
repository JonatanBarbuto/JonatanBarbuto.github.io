// Detectar cuando se hace clic en un enlace de navegación y desplazarse a la sección correspondiente
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Agregar una clase activa al enlace de navegación que corresponde a la sección visible actualmente
window.addEventListener('scroll', function(e) {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.classList.remove('active');
        if (anchor.getAttribute('href').slice(1) === currentSection) {
            anchor.classList.add('active');
        }
    });
});