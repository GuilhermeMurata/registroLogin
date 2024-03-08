const form = document.getElementById('form-registro');
const email = [];
const senha = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputEmailUsuario = document.getElementById('email-usuario');
    const inputSenhaUsuario = document.getElementById('senha-usuario');

    if (email.includes(inputEmailUsuario.value)) {
        alert(`Contato ${inputEmailUsuario} ja foi cadastrado`);
    } else {
        email.push(inputEmailUsuario.value);
        senha.push(parseFloat(inputSenhaUsuario.value));

        let linha = '<tr>';
        linha += `<td>${inputEmailUsuario.value}</td>`;
        linha += `<td>${inputSenhaUsuario.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputEmailUsuario.value = '';
    inputSenhaUsuario.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}