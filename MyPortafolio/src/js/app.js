    // Obtener la URL actual
    const currentURL = window.location.pathname;

    // Seleccionar todos los enlaces del menú
    const menuLinks = document.querySelectorAll('header ul li a');

    // Iterar sobre cada enlace y verificar si coincide con la URL actual
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentURL) {
            link.classList.add('text-[#007bff]', 'font-bold'); // Resaltar con clase activa
        } else {
            link.classList.add('text-[#333]'); // Color por defecto
        }
    });