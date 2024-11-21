
const logros = [
    "Medalla de Plata en los Juegos Olímpicos 2012",
    "Campeona del Campeonato Panamericano 2016",
    "Clasificación para los Juegos Olímpicos 2020",
    "Campeona de la Liga Mundial 2016"
];
if (logros.length > 0) {
    const logrosList = document.getElementById('logros-list');

    for (let i = 0; i < logros.length; i++) {
        const li = document.createElement('li');
        li.textContent = logros[i];
        logrosList.appendChild(li);
    }
}

let index = 0;

function mostrarImagen() {
    const imagenes = document.querySelector('.imagenes');
    const total = imagenes.children.length;
    const anchoImagen = imagenes.children[0].clientWidth; // Ancho de una imagen
    if (index >= total) {
        index = 0;
    }
    const offset = -index * anchoImagen; // Desplazamiento en píxeles
    imagenes.style.transform = `translateX(${offset}px)`;
    imagenes.style.transition = 'transform 0.5s ease'; // Animación suave
}

function cambiarImagen() {
    index++;
    mostrarImagen();
}


setInterval(cambiarImagen, 5000);

mostrarImagen();
