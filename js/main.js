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