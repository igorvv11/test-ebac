document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-ebac');
    const container = document.querySelector('.container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const primeiroNumero = parseInt(document.getElementById('primeiro-numero').value);
        const segundoNumero = parseInt(document.getElementById('segundo-numero').value);

        const mensagemSucesso = ` Parabéns!!!  O número ${primeiroNumero} é menor que o número ${segundoNumero}`;
        const mensagemErro = `O número ${primeiroNumero} precisa ser menor que o número ${segundoNumero}`;

        const containerMensagemSucesso = document.querySelector('.mensage-sucess');
        const containerMensagemErro = document.querySelector('.mensage-error');
        const diferença = (primeiroNumero < segundoNumero);

        if (diferença) {
            containerMensagemSucesso.textContent = mensagemSucesso;
            containerMensagemErro.textContent = '';
            container.classList.add('verde');
            container.classList.remove('vermelho');
        } else {
            containerMensagemErro.textContent = mensagemErro;
            containerMensagemSucesso.textContent = '';
            container.classList.add('vermelho');
            container.classList.remove('verde');
            document.getElementById('primeiro-numero').classList.add('vermelho');
            document.getElementById('segundo-numero').classList.add('vermelho');
        }

        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'block';

        // Limpa os campos de entrada
        document.getElementById('primeiro-numero').value = '';
        document.getElementById('segundo-numero').value = '';
    });
});

document.getElementById('segundo-numero').addEventListener('keyup', function (e) {
    const primeiroNumero = parseInt(document.getElementById('primeiro-numero').value);
    const segundoNumero = parseInt(e.target.value);
    const containerMensagemErro = document.querySelector('.mensage-error');
    const container = document.querySelector('.container');
    const mensagemErro = `O número ${primeiroNumero} precisa ser menor que o número ${segundoNumero}`;

    if (segundoNumero <= primeiroNumero) {
        container.classList.add('vermelho');
        container.classList.remove('verde');
        document.getElementById('primeiro-numero').classList.add('vermelho');
        document.getElementById('segundo-numero').classList.add('vermelho');
        containerMensagemErro.textContent = mensagemErro;
        containerMensagemErro.style.display = 'block';
    } else {
        container.classList.add('verde');
        container.classList.remove('vermelho');
        document.getElementById('primeiro-numero').classList.remove('vermelho');
        document.getElementById('segundo-numero').classList.remove('vermelho');
        containerMensagemErro.textContent = '';
        containerMensagemErro.style.display = 'none';
    }
});
