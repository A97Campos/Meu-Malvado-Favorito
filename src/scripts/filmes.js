const minions = document.getElementById('minions');
const meuMalvadoFavorito = document.getElementById('meuMalvadoFavorito');

minions.addEventListener("click", function(){
    let filmesMinions = document.getElementById('filmesMinions');
    let filmesMeuMalvadoFavorito = document.getElementById('filmesMeuMalvadoFavorito');

    filmesMinions.style.display = 'grid';
    filmesMeuMalvadoFavorito.style.display = 'none';
    meuMalvadoFavorito.classList.remove('is-active');
    minions.classList.add('is-active');
});

meuMalvadoFavorito.addEventListener("click", function(){
    let filmesMinions = document.getElementById('filmesMinions');
    let filmesMeuMalvadoFavorito = document.getElementById('filmesMeuMalvadoFavorito');

    filmesMeuMalvadoFavorito.style.display = 'grid';
    filmesMinions.style.display = 'none';
    meuMalvadoFavorito.classList.add('is-active');
    minions.classList.remove('is-active');
});