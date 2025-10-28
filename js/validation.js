// validation.js - Funções de Validação de Formulários (Entrega III)
// Cumpri o requisito de "sistema de verificação de consistência de dados"

// Função para verificar se um campo está vazio
function isFieldEmpty(value) {
    return value.trim() === '';
}

// Função de Validação Principal
function validateFormConsistency(formId) {
    const form = document.getElementById(formId);
    let isValid = true;
    let errors = [];

    if (!form) {
        console.error('Formulário não encontrado com o ID:', formId);
        return false;
    }

    // --- 1. Validações Básicas ---
    const nomeInput = form.querySelector('#nome');
    const emailInput = form.querySelector('#email');

    if (nomeInput && isFieldEmpty(nomeInput.value)) {
        errors.push('O campo Nome Completo é obrigatório.');
        isValid = false;
    }

    if (emailInput && !emailInput.value.includes('@')) {
        errors.push('O campo E-mail deve ser um endereço válido.');
        isValid = false;
    }

    // --- 2. Validação de Consistência (Máscaras/Dígitos) ---
    // Verifica se os campos de máscara foram preenchidos com o número correto de dígitos.

    const cpfInput = form.querySelector('#cpf');
    const telInput = form.querySelector('#telefone');
    const cepInput = form.querySelector('#cep');

    // Valida CPF (11 dígitos)
    if (cpfInput && cpfInput.value.replace(/[^0-9]/g, '').length !== 11) {
        errors.push('O CPF deve conter 11 dígitos.');
        isValid = false;
    }

    // Valida Telefone (10 ou 11 dígitos, ignorando máscara)
    const telefoneNumeros = telInput ? telInput.value.replace(/[^0-9]/g, '') : '';
    if (telInput && (telefoneNumeros.length < 10 || telefoneNumeros.length > 11)) {
        errors.push('O Telefone deve conter 10 ou 11 dígitos (com DDD).');
        isValid = false;
    }
    
    // Valida CEP (8 dígitos)
    if (cepInput && cepInput.value.replace(/[^0-9]/g, '').length !== 8) {
        errors.push('O CEP deve conter 8 dígitos.');
        isValid = false;
    }


    // 3. Exibir feedback ao usuário (requisito da atividade)
    if (errors.length > 0) {
        // Exibe os erros em um alerta simples
        alert('Formulário Incorreto:\n' + errors.join('\n'));
    }

    return isValid;
}

// Exporta a função para que app.js possa chamá-la
export { validateFormConsistency };