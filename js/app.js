
// Simula um JSON online (Banco de Dados)
const listaImoveis = [
    {
        id: 1,
        titulo: 'Apart. 3 dorm. Papicu',
        descricao: 'Lindo apartamento de 3 dormitórios localizado num dos melhores bairros de Fortaleza.',
        valor: 800000,
        area: 90,
        quartos: 3,
        tipo: 'apartamento', // casa, terreno
        localizacao: 'Santos Dummont, Papicu',
        mapa: 'link do maps',
        venda_aluguel: 'venda', // aluguel
        finalidade: 'residencial', // comercial
        fotos: [
            'https://id725a57.s3.amazonaws.com/fotos/i00035801.jpeg', // padrão [0]
            'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://img.freepik.com/fotos-premium/uma-casa-branca-encantadora-com-um-telhado-vermelho-brilhante-e-uma-janela-azul_1258321-339.jpg?w=360',
            'link4',
            'link5',
        ],
        status: true,
    },
    {
        id: 2,
        titulo: 'Apart. 2 dorm. Aldeota',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum numquam minus atque voluptatibus libero ut doloribus voluptas quo reiciendis.',
        valor: 500000,
        area: 60,
        quartos: 2,
        tipo: 'apartamento', // casa, terreno
        localizacao: 'Dom Luis, Aldeota',
        mapa: 'link do maps',
        venda_aluguel: 'venda', // aluguel
        finalidade: 'residencial', // comercial
        fotos: [
            'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // padrão [0]
            
            'https://id725a57.s3.amazonaws.com/fotos/i00035801.jpeg',

            'https://img.freepik.com/fotos-premium/uma-casa-branca-encantadora-com-um-telhado-vermelho-brilhante-e-uma-janela-azul_1258321-339.jpg?w=360',

            'link4',

            'link5',
        ],
        status: true,
    },
    {
        id: 3,
        titulo: 'Apart. 3 dorm. Caucaia',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ullam sint saepe aut autem dolore ut voluptate vero voluptatibus temporibus.',
        valor: 455000,
        area: 70,
        quartos: 3,
        tipo: 'apartamento', // casa, terreno
        localizacao: 'Rua Alto do Garrote, Caucaia',
        mapa: 'link do maps',
        venda_aluguel: 'venda', // aluguel
        finalidade: 'residencial', // comercial
        fotos: [
            'https://img.freepik.com/fotos-premium/uma-casa-branca-encantadora-com-um-telhado-vermelho-brilhante-e-uma-janela-azul_1258321-339.jpg?w=360', // padrão [0]

            'https://id725a57.s3.amazonaws.com/fotos/i00035801.jpeg',

            'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

            'link4',

            'link5',
        ],
        status: true,
    }
];



// Percorre a Lista de Imóveis
listaImoveis.forEach(imovel => {
    // console.log(imovel);

    // Cria o "card" do imóvel
    const cardImovel = document.createElement('article');
    cardImovel.classList.add('imovel');
    document.querySelector('#imoveis').appendChild(cardImovel);

    // Foto
    const divFoto = document.createElement('div');
    divFoto.classList.add('foto');
    cardImovel.appendChild(divFoto); // Adiciona a foto no card

    const img = document.createElement('img');
    img.setAttribute('src', imovel.fotos[0]);
    divFoto.appendChild(img);

    // Conteúdo
    const divConteudo = document.createElement('div');
    divConteudo.classList.add('conteudo');
    cardImovel.appendChild(divConteudo); // Adiciona o conteúdo no card

    const titulo = document.createElement('h3');
    titulo.textContent = imovel.titulo;
    divConteudo.appendChild(titulo);

    const descricao = document.createElement('p');
    descricao.textContent = imovel.descricao;
    divConteudo.appendChild(descricao);

    // Info
    const divInfo = document.createElement('div');
    divInfo.classList.add('info');
    cardImovel.appendChild(divInfo); // Adiciona a info no card

    const divDados = document.createElement('div');
    divInfo.appendChild(divDados);

        const localizacao = document.createElement('div');
        localizacao.textContent = `Localização: ${imovel.localizacao}`;
        divDados.appendChild(localizacao);

        const quartos = document.createElement('span');
        quartos.textContent = `Quartos: ${imovel.quartos} | `;
        divDados.appendChild(quartos);

        const area = document.createElement('span');
        area.textContent = `Área: ${imovel.area} m²`;
        divDados.appendChild(area);

        const divValor = document.createElement('div');
        divValor.classList.add('valor-imovel');
        divValor.textContent = `${imovel.valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
        divDados.appendChild(divValor);
});
