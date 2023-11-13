/* Pega os valores das div de cada elenco (masculino 
e feminino) */
const div_elenco_feminino = document.getElementById("lista_imagens_feminino");
const div_elenco_masculino = document.getElementById("lista_imagens_masculino");

// ----------------------------------------------

/* Cria a div de cada jogador do elenco com suas 
respectivas informações */
jogadores.forEach(
    (ele) => {
        /* Adiciona e estiliza a imagem do jogador */
        const img_jogador = document.createElement('img');
        img_jogador.src = ele.imagem;
        img_jogador.style.width = "auto";
        
      
       
        // --------------------------------------

        /* Adiciona e estiliza o nome do jogador */
        const nome_jogador = document.createElement('p');
        nome_jogador.innerHTML = ele.nome;
        nome_jogador.style.fontWeight = "bolder";

        // --------------------------------------

        /* Cria a div do cartão do jogador, com imagem e nome,
        ambas criadas acima */
        const div_jogador = document.createElement('div');
        div_jogador.className = "jogador";
        div_jogador.appendChild(img_jogador);
        div_jogador.appendChild(nome_jogador);

        // --------------------------------------

        /* Atribui os dados do jogador, com base no arquivo 
        'jogadores2023.js' */

        div_jogador.setAttribute("data-nome", ele.nome);
        div_jogador.setAttribute("data-posicao", ele.posicao);  
        div_jogador.setAttribute("data-imagem", ele.imagem);  
        div_jogador.setAttribute("data-descricao", ele.descricao);              
        div_jogador.setAttribute("data-nome_completo", ele.nome_completo);
        div_jogador.setAttribute("data-nascimento", ele.nascimento);        
        div_jogador.setAttribute("data-altura", ele.altura);

        // --------------------------------------

        /* Separa em qual div cada jogador vai ficar (masculino ou feminino)
        baseado na informação 'elenco' dada no 'jogadores2023.js' */
        if (ele.elenco == "feminino"){
            div_elenco_feminino.appendChild(div_jogador); /* Adiciona à div do elenco feminino */
        } else {
            div_elenco_masculino.appendChild(div_jogador); /* Adiciona à div do elenco masculino */
        }
    }
)

/*  */
const manipula_evento = (evento) => {
    
    const div_jogador = evento.currentTarget;

    /* Adiciona ao Local Storage todas as informações do jogador */
    localStorage.setItem('nome', div_jogador.dataset.nome);
    localStorage.setItem('posicao', div_jogador.dataset.posicao);
    localStorage.setItem('imagem', div_jogador.dataset.imagem);
    localStorage.setItem('descricao', div_jogador.dataset.descricao);
    localStorage.setItem('nome_completo', div_jogador.dataset.nome_completo);
    localStorage.setItem('nascimento', div_jogador.dataset.nascimento);
    localStorage.setItem('altura', div_jogador.dataset.altura);

    /* Redireciona à página de detalhes do jogador */
    window.location.href = "./detalhes.html";

}

/* Atribui à variável todas as divs com a classe 'jogador' */
const storage_jogador = document.querySelectorAll(".jogador");

// ----------------------------------------------

/* Adiciona ao Local Storage as informações do jogador no momento
em que a imagem for clicada */
storage_jogador.forEach((div_jogador) => {
  div_jogador.addEventListener("click", manipula_evento);
});

document.getElementById('selecao').addEventListener('change', function () {
    const filtro = this.value;
   
    const imagensFeminino = document.getElementById('lista_imagens_feminino');
    const imagensMasculino = document.getElementById('lista_imagens_masculino');
   
    if (filtro === 'feminino') {
       imagensMasculino.style.display = 'none';
       imagensFeminino.style.display = 'grid';
       imagensFeminino.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";

    } else if (filtro === 'masculino') {
       imagensFeminino.style.display = 'none';
       imagensMasculino.style.display = 'grid';
       imagensMasculino.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    } else {
       imagensFeminino.style.display = 'grid';
       imagensMasculino.style.display = 'grid';
       imagensFeminino.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
       imagensMasculino.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    }
   });

/*
   function updateGenderList() {
    const select = document.getElementById("selecao");
    const listaFeminino = document.getElementById("lista_imagens_feminino");
    const listaMasculino = document.getElementById("lista_imagens_masculino");
    const selectedGender = select.options[select.selectedIndex].value;

  
    // Clear the divs
    listaFeminino.innerHTML = "";
    listaMasculino.innerHTML = "";
  
    // Iterate through the array of players
    players.forEach(player => {
      console.log("Player Gender:", player.gender);
  
      // Create a new image element for each player
      const img = document.createElement("img");
      img.src = player.image;
  
      console.log("Image Source:", img.src);
  
      // Add the image element to the corresponding div based on the player's gender
      if (player.gender === "feminino" && (selectedGender === "feminino" || selectedGender === "todos")) {
        console.log("Appending to Feminino");
        listaFeminino.appendChild(img);
      } else if (player.gender === "masculino" && (selectedGender === "masculino" || selectedGender === "todos")) {
        console.log("Appending to Masculino");
        listaMasculino.appendChild(img);
      }
    });
  }
  */