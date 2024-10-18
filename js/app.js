// Link do "Banco de Dados" online
const urlAPI = "https://66a29be8967c89168f20a323.mockapi.io/api/users";

// Lista de imóveis (Global)
let listaImoveis = [];

// Acessa a API com os dados
fetch(urlAPI)
    // Retorna os dados encontrados e converte para JSON
    .then(resultado => resultado.json())

    // Manipula os dados retornados
    .then(imoveisAPI => {
        if (imoveisAPI.length == 0) {
            document.querySelector("#imoveis").innerHTML = 'Não há imóveis cadastrados';
            
        } else {
            // Guarda os dados retornados da API
            listaImoveis = imoveisAPI;
            criarCardImoveis();
        }
    })
    .catch((erro) => {
        console.error("Erro", erro);
        alert("Não foi possível carregar os dados");
    });

function criarCardImoveis() {
    // Cria o botão apenas se estiver logado
    const login = verificarLogin();

    console.log(login);

    // Percorre a Lista de Imóveis
    listaImoveis.forEach(imovel => {

        // Cria o "card" do imóvel
        const cardImovel = document.createElement("article");
        cardImovel.setAttribute('id', imovel.id);

        // Mostra o imóvel apenas para não admin
        if (login.length == 0) {
            cardImovel.setAttribute('onclick', 'mostrarImovel(this.id)');
        }

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

        // Div usada para alinhar os elementos em flex column
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

        if (login.length > 0) {
            const btnExcluir = document.createElement('button');
            btnExcluir.setAttribute('id', imovel.id);
            btnExcluir.setAttribute('onclick', 'excluirImovel(this.id)');
            btnExcluir.innerHTML = '🗑️';
            divDados.appendChild(btnExcluir);
        }
    });
}

/*
    - Se não houver usuário "logado" no sistema, não permite que exclua as postagens (imóveis).

    - Para fazer login no sistema, adicione /admin na URL.
    Exemplo: http://127.0.0.1:5500/admin
*/
function excluirImovel(id) {
    // Verifica se há usuário Logado no Sistema
    const login = verificarLogin();

    if (login.length == 0) {
        alert("Ação não permitida, faça Login no sistema");
        return;
        // Early return. (retorno precoce/antecipado)
    }

    const confirma = confirm("Confirma exclusão?");

    // if (confirma == true) {
    if (confirma) {
        fetch(`${urlAPI}/${id}`, {
            method: 'DELETE' // verbo HTTP
        })
            .then(() => {
                location.reload();
            })
            .catch(erro => {
                console.error('Erro: ', erro); // LOG
            });
    }
}

// ===== Abre as informações numa nova página ===== //
function mostrarImovel(id) {
    const imovelSelecionado = listaImoveis.find(imovel => imovel.id == id);

    localStorage.setItem('imovel', JSON.stringify(imovelSelecionado));
    open('./imovel.html');
}

// Verifica se o usuário está logado
function verificarLogin() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}
