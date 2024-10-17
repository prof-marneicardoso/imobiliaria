
const idImovel = document.querySelector('#imovel');

if (idImovel != undefined) {
    const id = JSON.parse(localStorage.getItem('imovel'));

    fetch(`${urlAPI}/${id}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data); // LOG
        })
        .catch(erro => {
            console.error('Erro: ', erro); // LOG
        });
}