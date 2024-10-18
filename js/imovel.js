
const divImovel = document.querySelector('#imovel');

// Busca o ID do imóvel no LocalStorage
const imovel = JSON.parse(localStorage.getItem('imovel'));

const titulo = document.createElement("h2");
titulo.textContent = imovel.titulo;
divImovel.appendChild(titulo);

const descricao = document.createElement("p");
descricao.textContent = imovel.descricao;
divImovel.appendChild(descricao);

// Lista de Fotos
imovel.fotos.forEach(foto => {
    const divFoto = document.createElement("div");
    divFoto.classList.add("foto-imovel");
    divImovel.appendChild(divFoto); // Adiciona a foto no card

    const img = document.createElement("img");
    img.setAttribute("src", foto);
    divFoto.appendChild(img);
});

const quartos = document.createElement("span");
quartos.textContent = `Quartos: ${imovel.quartos} | `;
divImovel.appendChild(quartos);

const area = document.createElement("span");
area.textContent = `Área: ${imovel.area} m²`;
divImovel.appendChild(area);

const divValor = document.createElement("div");
divValor.classList.add("valor-imovel");
divValor.textContent = `${imovel.valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
})}`;
divImovel.appendChild(divValor);

const localizacao = document.createElement("div");
localizacao.textContent = `Localização: ${imovel.localizacao}`;
divImovel.appendChild(localizacao);

const mapa = document.createElement("div");
mapa.classList.add('mapa');
mapa.innerHTML = imovel.mapa;
divImovel.appendChild(mapa);
