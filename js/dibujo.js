document.addEventListener("DOMContentLoaded", function() {
    const listaDibujos = [
        'jet.svg',
        'leon.svg',
        'penguin.svg',
        'fish.svg',
        'dog.svg',
        'whale.svg',
        'stegosaurus.svg',
        'train.svg',
        'woman.svg',
        'horse.svg',
    ];
    let indiceActual = 0;
    let colorSeleccionado = '#FFEB3B'; 
    const svgContenedor = document.getElementById('svg-dibujo');
    const paleta = document.querySelector('.paleta-colores');
    const btnSiguiente = document.getElementById('btnSiguiente');
    async function cargarSVG(url, nombreArchivo) {
        try {
            const response = await fetch(url);
            const svgData = await response.text();
            svgContenedor.innerHTML = svgData;
            svgContenedor.className = '';
            svgContenedor.classList.add( nombreArchivo.replace('.', '-') );
            prepararSVGListeners();
        } catch (error) {
            console.error('Error al cargar el SVG:', error);
            svgContenedor.innerHTML = '<p>No se pudo cargar el dibujo.</p>';
        }
    }
    function prepararSVGListeners() {
        const paths = svgContenedor.querySelectorAll('path');
        
        paths.forEach(path => {
            path.addEventListener('click', function() {
                this.style.fill = colorSeleccionado;
            });
        });
    }
    paleta.addEventListener('click', function(e) {
        if (e.target.classList.contains('color-opcion')) {
            
            const colores = paleta.querySelectorAll('.color-opcion');
            colores.forEach(c => c.classList.remove('seleccionado'));

            e.target.classList.add('seleccionado');
            
            colorSeleccionado = e.target.style.backgroundColor;
        }
    });
    btnSiguiente.addEventListener('click', function() {
        indiceActual++;
        if (indiceActual >= listaDibujos.length) {
            indiceActual = 0;
        }
        const nombreArchivo = listaDibujos[indiceActual];
        const proximoDibujoURL = `../img/${nombreArchivo}`;
        cargarSVG(proximoDibujoURL, nombreArchivo);
    });
    const primerNombre = listaDibujos[indiceActual];
    cargarSVG(`../img/${primerNombre}`, primerNombre);
    paleta.querySelector('.color-opcion').classList.add('seleccionado');
});