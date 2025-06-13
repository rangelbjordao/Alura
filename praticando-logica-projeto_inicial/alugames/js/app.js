let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {

    const jogoSelecionado = document.getElementById(`game-${id}`);

    const imagem = jogoSelecionado.querySelector(".dashboard__item__img");
    const botao = jogoSelecionado.querySelector(".dashboard__item__button");
    const nomeJogo = jogoSelecionado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
            jogosAlugados--;
        }
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});