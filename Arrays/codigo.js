const ingrid = atletas [0];


    const espaco_nome = document.getElementById('nome');
    const imagem = document.querySelector('div#container > img');
    const espaco_descricao = document.querySelector('div#container > p');
    
    const preenche =  (atleta) =>{
    espaco_nome.innerText= ingrid.nome;
    imagem.src = ingrid.imagem;
    espaco_descricao.innerText = ingrid.descricao;
    }

    preenche(ingrid)
