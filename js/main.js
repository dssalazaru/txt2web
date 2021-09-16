// Lectura de archivo de datos
var file = 'info.txt' // <-- Ruta del archivo

fetch(file)
    .then(response => response.text())
    .then(text => printdata(text))

function printdata(info) {
    if (info.length > 300) { // Imprime en consola o genera aviso
        console.log("Archivo cargado correctamente\nTamaño del archivo: " + info.length + "\nCreado por @dssalazaru");
    } else {
        document.getElementById('content').innerHTML = `<pre id="error-file">Error al leer la información de: <span>${file}</span><pre>`;
    }

    // Ajuste de datos en Array
    var array = info.split("\n");
    var elem = document.getElementById('data');

    for (var i = 0; i < array.length; i++) {
        // Variables a mostrar en la pagina
        var list = array[i].replace(/List: /, '').replace(/,.*/, '');
        var owners = array[i].replace(/.* Owners: /, '');
        var n = i + 1
        // Imprimir fila de datos en la tabla
        if (list.length > 0) {
            elem.innerHTML += `<tr><th scope="row" id="col1">${n}</th><td>${list}</td><td>${owners}</td></tr>`;
        }
    }
    $(document).ready(function () {
        $('#tabla').DataTable();
    });
}

// Funcion volver arriba
$(document).ready(function () {
    $('.up').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.up').slideDown(300);
        } else {
            $('.up').slideUp(300);
        }
    });
});