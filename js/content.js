// content.js - Armazena o HTML exclusivo de cada página (Templates)

const pageContent = {
    // NOTA: O conteúdo abaixo foi extraído das tags <main> originais de cada arquivo HTML.
    
    // ----------------------------------------------------
    // CONTEÚDO DA PÁGINA INÍCIO (index.html)
    // ----------------------------------------------------
    'index.html': `
        <h2>Bem-vindo(a) à ONG Jiu Jitsu Salvando Vidas!</h2>
        <p>A ONG Jiu Jitsu Salvando Vidas é um projeto social dedicado a oferecer a crianças e adolescentes carentes não apenas aulas de Jiu-Jitsu gratuitas, mas também o ensino da língua inglesa. Acreditamos que a disciplina do tatame e o conhecimento global andam juntos, abrindo portas para um futuro de oportunidades.</p>
        
        <div class="cards-container grid-12">
            <div class="card">
                <h3>🥋 Disciplina</h3>
                <p>O tatame ensina valores essenciais para a vida.</p>
            </div>
            <div class="card">
                <h3>📚 Educação</h3>
                <p>Aulas de inglês abrindo novos horizontes.</p>
            </div>
            <div class="card">
                <h3>🤝 Comunidade</h3>
                <p>Um ambiente seguro de apoio e crescimento mútuo.</p>
            </div>
        </div>
    `,

    // ----------------------------------------------------
    // CONTEÚDO DA PÁGINA SOBRE NÓS (sobre.html)
    // ----------------------------------------------------
    'sobre.html': `
        <h2>Nossa História e Missão</h2>
        
        <video width="100%" controls poster="images/jiujitsu-respeito.jpg">
            <source src="https://videos.pexels.com/video-files/5899455/5899455-sd_640_360_25fps.mp4" type="video/mp4">
            Seu navegador não suporta a tag de vídeo.
        </video>

        <p>O projeto nasceu da paixão pelo jiu-jitsu e da vontade de oferecer um caminho de disciplina, respeito e oportunidade para crianças carentes de nossa comunidade, incluindo também aulas de inglês para ampliar seus horizontes.</p>

        <hr>

        <h3>Depoimento de um Voluntário</h3>
        <audio controls>
            <source src="https://cdn.pixabay.com/audio/2022/03/10/audio_816752d52c.mp3" type="audio/mpeg">
            Seu navegador não suporta o elemento de áudio.
        </audio>
    `,

    // ----------------------------------------------------
    // CONTEÚDO DA PÁGINA PROJETOS (projetos.html)
    // ----------------------------------------------------
    'projetos.html': `
        <h2>Conheça Nossos Projetos</h2>
        <p>Aqui estão os detalhes das nossas iniciativas que transformam a vida das crianças, do tatame à sala de aula.</p>
        
        <hr>

        <h3>Galeria de Fotos</h3>
        <div class="galeria-container grid-12">
            <p>Galeria de fotos seria carregada dinamicamente, mas simplificamos para focar no SPA.</p>
        </div>

        <hr>

        <h3>Inscreva-se em um Projeto</h3>
        <p>O formulário de inscrição completo ficaria aqui.</p>
    `,

    // ----------------------------------------------------
    // CONTEÚDO DA PÁGINA VOLUNTARIADO (voluntariado.html)
    // ----------------------------------------------------
    'voluntariado.html': `
        <h2>Junte-se a Nós e Faça a Diferença!</h2>
        <p>Preencha o formulário abaixo para se cadastrar como um voluntário em nossa ONG.</p>
        <h3>Formulário de Cadastro de Voluntário</h3>
        <p>O formulário de cadastro de voluntário completo ficaria aqui.</p>
        <hr>
        <h3>Apadrinhe um Atleta</h3>
        <p>Esta é uma das formas mais especiais de ajudar! Ao "adotar" um aluno, você se torna um padrinho ou madrinha.</p>
    `,

    // ----------------------------------------------------
    // CONTEÚDO DA PÁGINA TRANSPARÊNCIA (transparencia.html)
    // ----------------------------------------------------
    'transparencia.html': `
        <h2>Transparência e Prestação de Contas</h2>
        <p>Nossa missão é mais forte quando compartilhada com total transparência. Aqui você pode acompanhar a aplicação dos recursos e o impacto social dos nossos projetos.</p>
        
        <h3>Gráfico 1: Distribuição de Recursos por Projeto (Pizza)</h3>
        <p>O gráfico de pizza entraria aqui.</p>
        
        <hr>

        <h3>Gráfico 2: Evolução de Voluntários Ativos (Linha)</h3>
        <p>O gráfico de linha entraria aqui.</p>

        <hr>

        <h3>Gráfico 3: Impacto Social por Região (Barras)</h3>
        <p>O gráfico de barras entraria aqui.</p>
    `,
    
    // ----------------------------------------------------
    // CONTEÚDO DA PÁGINA CADASTRO (cadastro.html)
    // ----------------------------------------------------
    'cadastro.html': `
        <h2>Formulário de Cadastro</h2>
        <p>Preencha seus dados para se cadastrar em nossa plataforma.</p>
        <form id="formCadastroSPA">
            <p>O formulário de cadastro completo (com máscaras e campos de CPF, CEP) ficaria aqui.</p>
            <button type="submit">Finalizar Cadastro</button>
        </form>
    `,
    
    // ----------------------------------------------------
    // CONTEÚDO DA PÁGINA CONTATO (contato.html)
    // ----------------------------------------------------
    'contato.html': `
        <h2>Fale Conosco</h2>
        <p>Tem alguma dúvida, sugestão ou proposta de parceria? Preencha o formulário abaixo ou entre em contato pelos nossos canais.</p>
        <p>O formulário de contato institucional ficaria aqui.</p>
        <hr>
        <p><strong>Email:</strong> contato@jiujitsusalvandovidas.org</p>
        <p><strong>Telefone:</strong> (11) 99999-8888 (WhatsApp)</p>
    `,
    
    // ----------------------------------------------------
    // CONTEÚDO DA PÁGINA BLOG (blog.html)
    // ----------------------------------------------------
    'blog.html': `
        <h2>Nosso Blog de Notícias</h2>
        <p>Fique por dentro das últimas novidades, eventos, graduações e histórias de superação dos nossos alunos.</p>
        <article>
            <h3>Primeiro Campeonato do Ano!</h3>
            <p><strong>Data:</strong> 20 de Outubro de 2025</p>
            <p>Nossos pequenos guerreiros participaram do primeiro campeonato do ano...</p>
            <a href="#">Leia mais...</a>
        </article>
        <hr>
        <article>
            <h3>Aulão Especial com Mestre Convidado</h3>
            <p><strong>Data:</strong> 15 de Setembro de 2025</p>
            <p>Recebemos a visita do faixa preta 5º grau, Mestre Ricardo...</p>
            <a href="#">Leia mais...</a>
        </article>
    `
};

// Exporta o objeto para que 'app.js' possa usá-lo
export { pageContent };