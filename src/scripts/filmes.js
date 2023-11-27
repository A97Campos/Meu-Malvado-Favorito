const minions = document.getElementById('minions');
const meuMalvadoFavorito = document.getElementById('meuMalvadoFavorito');
const filmesMinions = document.getElementById('filmesMinions');
const filmesMeuMalvadoFavorito = document.getElementById('filmesMeuMalvadoFavorito');

minions.addEventListener("click", function(){
    filmesMinions.style.display = 'flex';
    filmesMeuMalvadoFavorito.style.display = 'none';
    meuMalvadoFavorito.classList.remove('is-active');
    minions.classList.add('is-active');
});

meuMalvadoFavorito.addEventListener("click", function(){
    filmesMeuMalvadoFavorito.style.display = 'flex';
    filmesMinions.style.display = 'none';
    meuMalvadoFavorito.classList.add('is-active');
    minions.classList.remove('is-active');
});