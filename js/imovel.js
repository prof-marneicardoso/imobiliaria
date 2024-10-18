
const idImovel = document.querySelector('#imovel');

if (idImovel != undefined) {
    // Busca o ID do imóvel no LocalStorage
    const imovel = JSON.parse(localStorage.getItem('imovel'));

    // Busca a lista de imóveis no LocalStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
}