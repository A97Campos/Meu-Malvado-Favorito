function abrirElenco(){
    const esconder = document.getElementById('esconder');
    const mudarTexto = document.getElementById('mudarTexto');

    if (esconder.style.height === '100%'){
        esconder.style.height = '0';
        mudarTexto.innerHTML = 'ver mais';
        esconder.style.opacity = '0';
    } else {
        esconder.style.height = '100%';
        mudarTexto.innerHTML = 'fechar';
        esconder.style.opacity = '1';
    }
}