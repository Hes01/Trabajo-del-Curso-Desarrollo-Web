function mostrarReloj() {
    const reloj = document.getElementById('reloj');
    const ahora = new Date();
    const hora = ahora.getHours().toString().padStart(2, '0');
    const min = ahora.getMinutes().toString().padStart(2, '0');
    const seg = ahora.getSeconds().toString().padStart(2, '0');
    reloj.textContent = `${hora}:${min}:${seg}`;
}
setInterval(mostrarReloj, 1000);
mostrarReloj();