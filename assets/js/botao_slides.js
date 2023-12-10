document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section[data-index]');
    const scrollTopButton = document.getElementById('scrollTopButton');

    let currentIndex = 0;

    // Adiciona evento de clique à seta anterior
    document.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    // Adiciona um evento de clique ao botão de volta ao topo
    scrollTopButton.addEventListener('click', function () {
        // Rola suavemente para o topo da página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
