// Link do "Banco de Dados" online
const urlAPI = "https://66a29be8967c89168f20a323.mockapi.io/api/users";

// Acessa a API com os dados
fetch(urlAPI)
    // Retorna os dados encontrados e converte para JSON
    .then(resultado => resultado.json())

    // Manipula os dados retornados
    .then(listaImoveis => {
        if (listaImoveis.length == 0) {
            document.querySelector("#imoveis").innerHTML = 'Não há imóveis cadastrados';
        
        } else {
            criarCardImoveis(listaImoveis);
        }
    })
    .catch((erro) => {
        console.error("Erro", erdadosro);
        alert("Não foi possível carregar os dados");
    });

function criarCardImoveis(listaImoveis) {
    // Percorre a Lista de Imóveis
    listaImoveis.forEach(imovel => {
        // console.log(imovel);

        // Cria o "card" do imóvel
        const cardImovel = document.createElement("article");
        cardImovel.setAttribute('id', imovel.id);
        cardImovel.classList.add("imovel");
        document.querySelector("#imoveis").appendChild(cardImovel);

        // Foto
        const divFoto = document.createElement("div");
        divFoto.classList.add("foto");
        cardImovel.appendChild(divFoto); // Adiciona a foto no card

        const img = document.createElement("img");
        img.setAttribute("src", imovel.fotos[0]);
        divFoto.appendChild(img);

        // Conteúdo
        const divConteudo = document.createElement("div");
        divConteudo.classList.add("conteudo");
        cardImovel.appendChild(divConteudo); // Adiciona o conteúdo no card

        const titulo = document.createElement("h3");
        titulo.textContent = imovel.titulo;
        divConteudo.appendChild(titulo);

        const descricao = document.createElement("p");
        descricao.textContent = imovel.descricao;
        divConteudo.appendChild(descricao);

        // Info
        const divInfo = document.createElement("div");
        divInfo.classList.add("info");
        cardImovel.appendChild(divInfo); // Adiciona a info no card

        const divDados = document.createElement("div");
        divInfo.appendChild(divDados);

        const localizacao = document.createElement("div");
        localizacao.textContent = `Localização: ${imovel.localizacao}`;
        divDados.appendChild(localizacao);

        const quartos = document.createElement("span");
        quartos.textContent = `Quartos: ${imovel.quartos} | `;
        divDados.appendChild(quartos);

        const area = document.createElement("span");
        area.textContent = `Área: ${imovel.area} m²`;
        divDados.appendChild(area);

        const divValor = document.createElement("div");
        divValor.classList.add("valor-imovel");
        divValor.textContent = `${imovel.valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        })}`;
        divDados.appendChild(divValor);
    });
}
