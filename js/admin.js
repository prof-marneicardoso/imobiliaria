
const formulario = document.querySelector('#formCadastro');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    cadastrarUsuario();
});

function cadastrarUsuario() {

    // Busca a lista de usuários do Local Storage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Adiciona o usuário informado na lista
    usuarios.push(
        {
            nome: formulario.nome.value,
            email: formulario.email.value,
            senha: formulario.senha.value
        }
    );

    // Salva os dados na Local Storage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Usuário cadastrado com sucesso!");
}
