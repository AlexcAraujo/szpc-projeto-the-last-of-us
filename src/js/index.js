/* 
OBJETIVO - quando clicar no botão temos que mostrar a imagem de fundo correspondente

- passo 1 - dar um jeito de pegar o elemnto HTML dos botões

- passo 2 - dar um jeito de identificar o clique do usuario no botão

- passo 3 - desmarcar o botão selecionado anterior

- passo 4 - marcar o botão clicado como se estivesse  selecionado

- passo 5 - esconder imagem anterior

- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/
//- passo 1 - dar um jeito de pegar o elemnto HTML dos botões
const/*variavel constante*/ botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

//- passo 2 - dar um jeito de identificar o clique do usuario no botão
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //- passo 3 - desmarcar o botão selecionado anterior
        desmarcarBotaoSelecionado();

        //- passo 4 - marcar o botão clicado como se estivesse  selecionado
        selecionarBotaoCarrosel(botao);

        //- passo 5 - esconder imagem ativa de fundo
        esconderImagemAtiva();

        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mudarImagemdeFundo(indice);

    })
})

function mudarImagemdeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
