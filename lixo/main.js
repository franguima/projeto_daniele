document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.info-section');
    const prevArrow = document.querySelector('.arrow-prev');
    const nextArrow = document.querySelector('.arrow-next');
    const scrollTopButton = document.getElementById('scrollTopButton');

    let currentIndex = 0;

    // Adiciona evento de clique à seta anterior
    prevArrow.addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = Math.max(currentIndex - 1, 0);
        sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    });

    // Adiciona evento de clique à próxima seta
    nextArrow.addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    });

    // Adiciona um ouvinte de rolagem para mostrar/ocultar o botão conforme necessário
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollTopButton.style.display = 'block';
            prevArrow.classList.add('transform-effect');
            nextArrow.classList.add('transform-effect');
        } else {
            scrollTopButton.style.display = 'none';
            prevArrow.classList.remove('transform-effect');
            nextArrow.classList.remove('transform-effect');
        }
    });

    // Adiciona um evento de clique ao botão de volta ao topo
    scrollTopButton.addEventListener('click', function () {
        // Rola suavemente para o topo da página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
