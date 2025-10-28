// app.js - Motor principal do SPA

// Importa o dicionário de templates e a função de validação
import { pageContent } from './content.js';
import { validateFormConsistency } from './validation.js'; // NOVO!

// Seletores do DOM
const appContent = document.getElementById('app-content');
const navLinks = document.querySelectorAll('nav a'); 

// Função principal que carrega o conteúdo
function loadContent(pageName) {
    const content = pageContent[pageName]; 

    if (content) {
        appContent.innerHTML = content; 
        history.pushState(null, '', pageName); 
        
        // NOVO: Chama a função que anexa os eventos de envio/validação nos formulários.
        attachFormEvents(); 

    } else {
        appContent.innerHTML = '<h2>404</h2><p>Página não encontrada!</p>';
        history.pushState(null, '', '404.html');
    }
}

// Função para anexar o evento de envio do formulário (incluindo validação)
function attachFormEvents() {
    const form = document.getElementById('formCadastroSPA'); // ID do formulário na página de cadastro
    
    // Evento para o formulário de Cadastro
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário (que recarregaria a página)
            
            // Chama a função de validação
            const isValid = validateFormConsistency('formCadastroSPA'); 

            if (isValid) {
                alert('Cadastro enviado com sucesso! (Simulação de envio)');
                // Aqui seria o código para enviar os dados para um servidor (backend)
            }
        });
    }
}

// ----------------------------------------------------
// GERENCIAMENTO DE EVENTOS (Cliques no Menu)
// ----------------------------------------------------
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o navegador de recarregar a página!
        
        const pageName = this.getAttribute('href'); // Pega o nome do arquivo do link
        
        loadContent(pageName); // Carrega o conteúdo dinamicamente
    });
});

// ----------------------------------------------------
// Carregamento Inicial
// ----------------------------------------------------

// Carrega o conteúdo inicial ao abrir o site
loadContent('index.html');