

let historicoSorteio = []; 

const SomSorteio = new Audio ('sons/SomBingo.mp3');

function SortearPedra() {
    // 1. Verificamos se o jogo acabou
    if (historicoSorteio.length >= 75) {
        alert("Fim do jogo! Todos os números saíram.");
        let botao = document.getElementById ('btn-sortear');
        botao.disable = true;
        botao.innerText ="Fim de jogo!";
        botao.style.opacity = 0.5;
             return;
    }

         

    // 2. Sorteamos o primeiro número para poder testar no while
    let numeroSorteado = Math.floor(Math.random() * 75) + 1;

    // 3. O Verificador: Enquanto o número sorteado já estiver na lista...
    while (historicoSorteio.includes(numeroSorteado)) {
        // ...sorteia um novo e tenta de novo
        numeroSorteado = Math.floor(Math.random() * 75) + 1;
    }
        SomSorteio.currentTime = 0
        SomSorteio.play();
  
    // 4. Agora que é um número inédito, guardamos no histórico
    historicoSorteio.push(numeroSorteado);

    // 5. Conexão com o HTML (Letra e Número)
    let letraSorteada = "";
    if (numeroSorteado >=1 && numeroSorteado <=15) {
        letraSorteada = "B";
 }     
    else if (numeroSorteado >=16 && numeroSorteado <=30) {
        letraSorteada = "I"; }
    else if (numeroSorteado >=31 && numeroSorteado <=45) {
        letraSorteada = "N";}
    else if (numeroSorteado >=46 && numeroSorteado <=60) {
        letraSorteada = "G"; }
    else {
         letraSorteada ="O"
    }



    

    document.getElementById('txt_num').innerText = numeroSorteado;
    document.getElementById('txt_letra').innerText = letraSorteada;
    // 6. Atualizar o histórico na tela (ADICIONE ISSO):
    let listaHTML = document.getElementById('listaHistorico');
    let novoItem = document.createElement('li'); // Cria um item de lista
    novoItem.innerText = `${letraSorteada} - ${numeroSorteado}`; // Coloca o texto
    listaHTML.appendChild(novoItem); // Coloca o item dentro da lista <ul>
    // 6. Histórico no Console para conferência
    console.log(`Número: ${numeroSorteado} | Histórico: ${historicoSorteio}`);

  
}
  function ReiniciarJogo() {
    // Limpeza da lógica
    historicoSorteio = [];

      let botao = document.getElementById ('btn-sortear');
      botao.disable = false;
      botao.innerText = "Sortear!";
      botao.style.opacity = 1;
    document.getElementById('listaHistorico').innerHTML = "";
    document.getElementById('txt_letra').innerText = "Letra";
    document.getElementById('txt_num').innerText = "Num";
    document.getElementById('numeroAtual').innerText = "Jogo reiniciado!";
    
    console.log("Sistema resetado com sucesso.");
  }


