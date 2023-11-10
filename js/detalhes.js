
/* Pega os valores guardados no Aramezenamento Local e atribui a
valores que serão utilizados na criação da página */ 
const id = localStorage.getItem('id')
const nome = localStorage.getItem('nome');
const posicao = localStorage.getItem('posicao');
const imagem = localStorage.getItem('imagem');
const descricao = localStorage.getItem('descricao');
const nome_completo = localStorage.getItem('nome_completo');
const nascimento = localStorage.getItem('nascimento');
const altura = localStorage.getItem('altura');

document.addEventListener('DOMContentLoaded', function() {

    /* 
    Adiciona os elementos de texto à página de detalhes criando
    elementos de parágrafo e imagem.
    */

    const nome_p = document.createElement('p');
    nome_p.textContent = nome;

    const posicao_p = document.createElement('p');
    posicao_p.textContent = posicao;

    const imagem_p = document.createElement('img');
    imagem_p.src = imagem;

    const descricao_p = document.createElement('p');
    descricao_p.textContent = descricao;

    const nome_completo_p = document.createElement('p');
    nome_completo_p.textContent = "Nome completo: " + nome_completo;

    const nascimento_p = document.createElement('p');
    nascimento_p.textContent = "Nascimento: " + nascimento;

    const altura_p = document.createElement('p');
    altura_p.textContent = "Altura: " + altura;

    // ------------------------------------------

    /* 
    Cria a primeira div com as informações do jogador,
    contendo imagem, nome e posição.
    */

    const info_jogador = document.getElementById('foto_info');
    info_jogador.style.textAlign = "center"; // Alinha o texto no centro da div.
    info_jogador.style.textTransform = "uppercase"; // Transforma o texto para letras maiúsculas.
    info_jogador.style.fontWeight = "bolder"; // Transforma o texto em negrito.

    info_jogador.appendChild(imagem_p);
    info_jogador.appendChild(nome_p);
    info_jogador.appendChild(posicao_p);

    // ------------------------------------------

    /* 
    Cria a segunda div com as informações do jogador,
    contendo descrição, nome completo, nascimento e
    altura.
    */

    const detalhes_info = document.getElementById('detalhes_info');
    detalhes_info.appendChild(descricao_p);
    detalhes_info.appendChild(nome_completo_p);
    detalhes_info.appendChild(nascimento_p);
    detalhes_info.appendChild(altura_p);

    // ------------------------------------------

    /*
    Adiciona as duas divs de informação em uma só na 
    página detalhesl, mais estilização (como responsividade) 
    disponível no arquivo 'style_detalhes.css'.
    */

    const tudo = document.getElementById('info_jogador');
    tudo.appendChild(info_jogador);
    tudo.appendChild(detalhes_info);

    // ------------------------------------------

    // Criando botão de voltar para a página inicial 
    const voltar = document.createElement('a');
    voltar.className = "btn_voltar";
    voltar.innerHTML = "Voltar";
    voltar.href = "./index.html";
    voltar.style.textDecoration = "none";
    voltar.style.color = "#ffffff";
    voltar.style.fontSize = "23pt";

    // ------------------------------------------

    /* 
    Adicionando todos os elementos (informações do jogador e
    botão de voltar) na página.
    */

    document.body.appendChild(tudo);
    document.body.appendChild(voltar);
});