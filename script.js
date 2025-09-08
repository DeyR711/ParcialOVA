function reloj() {
    var hoy = new Date();
    var hora = hoy.getHours();
    var minutos = hoy.getMinutes();
    var secundos = hoy.getSeconds();
    ap = (hora < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hora = (hora == 0) ? 12 : hora;
    hora = (hora > 12) ? hora - 12 : hora;
    hora = tiempoC(hora);
    minutos = tiempoC(minutos);
    secundos = tiempoC(secundos);
    document.getElementById("reloj").innerHTML = hora + ":" + minutos + ":" + secundos + " " + ap;

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
    var diaSemana = dias[hoy.getDay()];
    var dia = hoy.getDate();
    var mes = meses[hoy.getMonth()];
    var año = hoy.getFullYear();
    var fecha = diaSemana + ", " + dia + " " + mes + " " + año;
    document.getElementById("fecha").innerHTML = fecha;

    var tiempo = setTimeout(function () { reloj() }, 500);
}

function tiempoC(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var visible = false;
function iniciar() {
    var elemento = document.getElementById("menu-img");
    elemento.addEventListener("click", mostrarMenu);
}

function mostrarMenu() {
    var elemento = document.getElementById("menu");
    if (!visible) {
        elemento.style.display = "flex";
        visible = true;
    } else {
        elemento.style.display = "none";
        visible = false;
    }
}