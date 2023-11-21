const abrir = document.getElementById('abrir');
const fechar = document.getElementById('fechar');
const btnFechar = document.getElementById('btnFechar');


abrir.addEventListener('click', function() {
    btnFechar.style.opacity = '1';
});

fechar.addEventListener('click', function(){
    btnFechar.style.opacity = '0';
})