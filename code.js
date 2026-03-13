// const txtNum = document.getElementById("txt_num")
// ATENÇÃO: Esta variável TEM que ficar fora da função
let historicoSorteio = []; 

function SortearPedra() {
    // 1. Verificamos se o jogo acabou
    if (historicoSorteio.length >= 75) {
        alert("Fim do jogo! Todos os números saíram.");
        return;
    }

    // 2. Sorteamos o primeiro número para poder testar no while
    let numeroSorteado = Math.floor(Math.random() * 75) + 1;

    // 3. O Verificador: Enquanto o número sorteado já estiver na lista...
    while (historicoSorteio.includes(numeroSorteado)) {
        // ...sorteia um novo e tenta de novo
        numeroSorteado = Math.floor(Math.random() * 75) + 1;
    }

    // 4. Agora que é um número inédito, guardamos no histórico
    historicoSorteio.push(numeroSorteado);

    // 5. Conexão com o HTML (Letra e Número)
    const letras = ['B', 'I', 'N', 'G', 'O'];
    const indiceAleatorio = Math.floor(Math.random() * letras.length);
    const letraSorteada = letras[indiceAleatorio];

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


