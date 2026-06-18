AOS.init({
    duration: 900,
    once: true,
    offset: 120
});


document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.navbar-collapse');
        if (menu.classList.contains('show')) {
            new bootstrap.Collapse(menu).hide();
        }
    });
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});


document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const vehiculo = document.getElementById("vehiculo").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;

    const telefono = "51966944029";

    const texto = `Hola, soy ${nombre}. Quiero solicitar una cotización.%0A%0AVehículo: ${vehiculo}%0AServicio: ${servicio}%0ADetalle: ${mensaje}`;

    window.open(`https://wa.me/${telefono}?text=${texto}`, "_blank");
});