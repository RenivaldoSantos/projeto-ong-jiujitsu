// Aguarda o HTML ser completamente carregado antes de tentar desenhar o gráfico
document.addEventListener('DOMContentLoaded', function() {

    // 1. ENCONTRAR O CANVAS
    // Pega o elemento <canvas> do nosso HTML usando o 'id' que demos a ele.
    const canvas = document.getElementById('graficoPizza');
    
    // O 'getContext' é como pegar os "pincéis e tintas" para desenhar em 2D na nossa tela.
    const ctx = canvas.getContext('2d');

    // 2. DADOS DO GRÁFICO
    // Um objeto para guardar os dados: o nome do projeto e o valor gasto.
    const dados = {
        "Projeto Jiu-Jitsu": 2000,
        "Projeto Inglês": 1500,
        "Custos Administrativos": 500
    };

    // Um objeto para guardar as cores de cada fatia.
    const cores = {
        "Projeto Jiu-Jitsu": "#007bff", // Azul
        "Projeto Inglês": "#28a745", // Verde
        "Custos Administrativos": "#ffc107"  // Amarelo
    };

    // 3. LÓGICA PARA DESENHAR O GRÁFICO DE PIZZA
    // Calcula o valor total para sabermos o tamanho relativo de cada fatia.
    const total = Object.values(dados).reduce((soma, valor) => soma + valor, 0);
    
    // O ponto de partida para a primeira fatia (começa no topo do círculo).
    let anguloInicial = -0.5 * Math.PI; // Começa em -90 graus (topo)

    // Percorre cada projeto nos nossos dados
    for (const projeto in dados) {
        const valor = dados[projeto];
        
        // Calcula o ângulo da fatia (proporcional ao valor)
        // 2 * Math.PI é um círculo completo (360 graus) em radianos.
        const anguloFatia = (valor / total) * 2 * Math.PI;
        const anguloFinal = anguloInicial + anguloFatia;

        // Inicia um novo "desenho"
        ctx.beginPath();
        
        // Define a cor de preenchimento para esta fatia
        ctx.fillStyle = cores[projeto];
        
        // Move o "pincel" para o centro da tela
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        
        // Desenha o arco (a borda da fatia da pizza)
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, anguloInicial, anguloFinal);
        
        // Fecha o caminho, criando a forma da fatia
        ctx.closePath();
        
        // Pinta a fatia com a cor definida
        ctx.fill();

        // Atualiza o ângulo inicial para a PRÓXIMA fatia
        anguloInicial = anguloFinal;

        // ... (todo o código do gráfico de pizza que já fizemos) ...

// =================================================================
//          INÍCIO DO CÓDIGO PARA O GRÁFICO DE LINHA
// =================================================================

// 1. ENCONTRAR O NOVO CANVAS
const canvasLinha = document.getElementById('graficoLinha');
const ctxLinha = canvasLinha.getContext('2d');

// 2. DADOS DO GRÁFICO DE LINHA
const dadosLinha = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"], // Rótulos do eixo X
    valores: [5, 8, 12, 11, 15, 20] // Número de voluntários em cada mês
};

// 3. LÓGICA PARA DESENHAR O GRÁFICO
// Encontrar o valor máximo para ajustar a altura do gráfico
const valorMaximo = Math.max(...dadosLinha.valores);
const numDivisoes = dadosLinha.labels.length - 1;
const espacoEntrePontos = canvasLinha.width / numDivisoes;

// Inicia o caminho do desenho
ctxLinha.beginPath();
// Move o "pincel" para o primeiro ponto do gráfico
ctxLinha.moveTo(0, canvasLinha.height - (dadosLinha.valores[0] / valorMaximo) * canvasLinha.height);

// Percorre os outros pontos para desenhar as linhas
for (let i = 1; i < dadosLinha.valores.length; i++) {
    const x = i * espacoEntrePontos; // Posição X do ponto
    const y = canvasLinha.height - (dadosLinha.valores[i] / valorMaximo) * canvasLinha.height; // Posição Y
    ctxLinha.lineTo(x, y); // Desenha uma linha até o próximo ponto
}

// Configurações da linha
ctxLinha.strokeStyle = '#dc3545'; // Cor da linha (vermelho)
ctxLinha.lineWidth = 3; // Espessura da linha

// Desenha a linha na tela
ctxLinha.stroke();

// ... (código do gráfico de pizza e do gráfico de linha) ...

//          INÍCIO DO CÓDIGO PARA O GRÁFICO DE BARRAS

// 1. ENCONTRAR O CANVAS DAS BARRAS
const canvasBarras = document.getElementById('graficoBarras');
const ctxBarras = canvasBarras.getContext('2d');

// 2. DADOS DO GRÁFICO DE BARRAS
const dadosBarras = {
    labels: ["Zona Leste", "Zona Norte", "Zona Sul", "Zona Oeste", "Centro"],
    valores: [50, 35, 60, 25, 40] // Número de crianças atendidas por região
};

// 3. LÓGICA PARA DESENHAR AS BARRAS
const valorMaxBarras = Math.max(...dadosBarras.valores);
const larguraBarra = 50;
const espacoEntreBarras = 60;

// Cor e fonte dos rótulos
ctxBarras.fillStyle = '#333'; // Cor escura para o texto
ctxBarras.font = '14px Arial';

// Percorre cada barra para desenhar
dadosBarras.valores.forEach((valor, index) => {
    // Calcula a altura da barra proporcional ao valor máximo
    const alturaBarra = (valor / valorMaxBarras) * (canvasBarras.height - 30); // Deixa um espaço para o texto
    
    // Calcula a posição X (horizontal) de cada barra
    const x = index * (larguraBarra + espacoEntreBarras) + espacoEntreBarras;
    
    // Calcula a posição Y (vertical) do topo da barra
    const y = canvasBarras.height - alturaBarra - 20; // Deixa um espaço para o texto embaixo

    // Define a cor de preenchimento da barra
    ctxBarras.fillStyle = '#6f42c1'; // Roxo
    
    // Desenha a barra (retângulo)
    ctxBarras.fillRect(x, y, larguraBarra, alturaBarra);

    // Escreve o rótulo (nome da região) abaixo da barra
    ctxBarras.fillStyle = '#333'; // Volta a cor para o texto
    ctxBarras.fillText(dadosBarras.labels[index], x, canvasBarras.height - 5);
});
    }

});