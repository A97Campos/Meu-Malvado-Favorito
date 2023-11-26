const abrir = document.getElementById('abrir');
const fechar = document.getElementById('fechar');
const btnFechar = document.getElementById('btnFechar');


abrir.addEventListener('click', function() {
    btnFechar.style.maxWidth = '100%';
});

btnFechar.addEventListener('click', function(){
    btnFechar.style.maxWidth = '0';
})