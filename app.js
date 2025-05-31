function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__frente">
            <span class="cartao__categoria">${categoria}</span>
            <p class="cartao__texto">${pergunta}</p>
            <span class="cartao__acao">Clique para ver a resposta</span>
        </div>
        <div class="cartao__verso">
            <p class="cartao__texto">${resposta}</p>
            <span class="cartao__acao">Clique para ver a pergunta</span>
        </div>
    `;

    cartao.addEventListener('click', function() {
        this.classList.toggle('cartao--virado');
    });

    container.appendChild(cartao);
}